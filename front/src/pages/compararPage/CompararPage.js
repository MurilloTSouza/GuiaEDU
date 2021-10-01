import React, { Component } from 'react'
import axios from 'axios';
import Selector from '../../components/form/input/selector/Selector';
import { Modal, Typography } from '@material-ui/core';
import CompareGroup from '../../components/compare/CompareGroup';
import Loading from '../../components/progress/loading/Loading';

import './CompararPage.css'

export default class CompararPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            area: '',
            data: [],

            options: [],
            error: null,
            isLoading: false
        }
    }

    componentDidMount(){
        this.setState({isLoading: true})

        axios.get('http://localhost:8081/api/options')
            .then( res => {
                this.setState({
                    options: res.data.areas,
                    error: null,
                    isLoading: false
                })
                this.setArea('') // start with any area
            })
            .catch( err => {
                this.setState({
                    error: 'Erro de conexão com API de busca',
                    isLoading: false
                })
                this.setArea('') // start with any area
            })
    }

    setArea = (area) => {        
        this.setState({
            area: area,
            isLoading: true
        })

        let url = 'http://localhost:8081/api/search/curso';
        url = (area === '') 
            ? url
            : url+'?area='+area;

        axios.get(url)
            .then( res => {
                this.setState({
                    data: res.data,
                    error: false,
                    isLoading: false
                })
            })
            .catch( err => {
                this.setState({
                    error: 'Erro de conexão com API de busca',
                    isLoading: false
                })
            })
    }

    handleSelectArea = (event) => {
        this.setArea(event.target.value)
    }
    
    render() {
        const {area, data, options, isLoading} = this.state;

        return (
            <div className="CompararPage">

                <div className="selection-box">
                    <div className="select">
                        <Selector disabled={isLoading}
                            name='area'
                            label='Área'
                            value={area}
                            options={options}
                            onChange={this.handleSelectArea} />
                    </div>
                    
                    <Typography align="center">
                        Comparação da qualidade de ensino de um determinado curso,
                        observando as médias e distribuições de cada Região,
                        Rede de ensino e Modalidade de ensino.
                    </Typography>
                </div>

                <CompareGroup data={data} area={area}/>

                <Modal open={isLoading}><Loading /></Modal>
            </div>
        )
    }
}

