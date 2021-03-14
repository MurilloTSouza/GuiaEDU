import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import axios from 'axios'
import Error from '../progress/error/Error'
import Loading from '../progress/loading/Loading'
import CursoGroup from './group/curso/CursoGroup'
import IesGroup from './group/ies/IesGroup'
import LocalGroup from './group/local/LocalGroup'
import SwitchLabel from './input/switchLabel/SwitchLabel'

import './SearchForm.css'

export default class SearchForm extends Component {

    constructor(props){
        super(props)

        this.formRef = React.createRef();

        this.state = {
            formParams: {
                regiao: '', // required but initiated when options loaded
                estado: '',
                municipio: '',

                rede: '',
                organizacao: '',
                administracao: '',

                area: '', // required but initiated when options loaded
                modalidade: '',

                min_enade: 0,
                max_enade: 5,
                min_curso: 0,
                max_curso: 5
            },
            
            searching: false,
            loading: true,
            options: [],
            error: null,

            searchCurso: props.cursoOnly
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/api/options')
            .then( res => {
                this.setState( {
                    formParams: {
                        ...this.state.formParams,
                        regiao: res.data.regioes[0].regiao, // initial value to required input
                        area: res.data.areas[0] // initial value to required input
                    },
                    options: res.data,
                    error: null} )
            })
            .catch( err => {this.setState( {error: 'Erro de conexão com API de busca'} )} )
            .finally( this.setState({loading: false}) )
    }

    handleInputChange = (e) => {
        this.setState({
            formParams: {
                ...this.state.formParams,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSwitchChange = (e) => {
        this.setState({ searchCurso: e.target.checked })
        
        // Scroll form to up or down based on switch
        const form = this.formRef.current;
        const formPosition = e.target.checked ? form.scrollHeight : 0;
        form.scrollTo({top: formPosition, behavior: "smooth"})
    }

    setParams = (params) => {
        this.setState({formParams: {
            ...this.state.formParams,
            ...params
        }});
    }

    handleSubmit = () => {
        this.setState({searching: true})
        const {searchCurso, formParams} = this.state;

        let path = searchCurso ? 'curso' : 'ies';
        let query = this.buildQuery(formParams);
        let url = 'http://localhost:8080/api/search/'+path+'?'+query;

        axios.get(url)
            .then( res => {
                this.setState({error: null})
                this.props.onResult(res.data, path) // passing result to parent
            })
            .catch( err => {
                this.setState({error: "Erro na busca."})
            })
            .finally(()=>{
                this.setState({searching: false})
            })
    }

    render() {
        const {searching, loading, error, options, searchCurso} = this.state;
        if(loading) return ( <Loading/> );
        if(error) return ( <Error msg={error}/> );

        if(options.length<1) return null; // if options is empty
        
        const {regiao, estado, municipio,
            rede, administracao, organizacao,
            min_enade, max_enade, min_curso, max_curso,
            area, modalidade} = this.state.formParams;
        
        var localValues = {regiao, estado, municipio};
        var iesValues = {rede, administracao, organizacao};
        var cursoValues = {
            enade: [min_enade, max_enade], curso: [min_curso, max_curso],
            area, modalidade };
        
        const localGroup = (
            <LocalGroup
                values={localValues}
                options={options}
                setParams={this.setParams}
            />
        )
        const iesGroup = (
            <IesGroup
                values={iesValues}
                options={options}
                onInputChange={this.handleInputChange}
            />
        )

        const cursoGroup = (
            <CursoGroup active={searchCurso}
                values={cursoValues}
                options={options}
                setParams={this.setParams}
                onInputChange={this.handleInputChange}
            />
        )

        const switchLabel = (
            <SwitchLabel
                label="Buscar por curso."
                checked={searchCurso}
                onChange={this.handleSwitchChange}
            />
        )

        const formContent = this.props.cursoOnly
            ? <> {cursoGroup} {localGroup} {iesGroup} </> // search curso only
            : <> {localGroup} {iesGroup} {switchLabel} {cursoGroup} </> // search ies and curso

        return (
            <div className="SearchForm">

                <div className="form-content" ref={this.formRef}>
                    {formContent}
                </div>

                <div className="footer">
                    <Button fullWidth disabled={searching}
                        color="primary"
                        variant="contained"
                        startIcon={<Search/>}
                        onClick={this.handleSubmit}
                    >
                        Buscar
                    </Button>
                </div>

            </div>
        )
    }

    buildQuery(params){
        const query = [];
        for (let p in params) {
            if(params[p] !== '')
                query.push(p + '=' + params[p]);
        }
        return query.join('&');
    }
}
