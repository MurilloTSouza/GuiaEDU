import React, { Component } from 'react'
import { Pagination } from '@material-ui/lab'
import PagingToolBar from '../tools/PagingToolBar'
import { Container, Divider } from '@material-ui/core'
import CursoPagingRows from './row/CursoPagingRows'

import './CursoPaging.css'

const strategies = {
    sortByEnadeAsc: (a, b) => { return a.conceitoEnade.continuo - b.conceitoEnade.continuo; },
    sortByEnadeDesc: (a, b) => { return b.conceitoEnade.continuo - a.conceitoEnade.continuo; },
    sortByCursoAsc: (a, b) => { return a.conceitoCurso.continuo - b.conceitoCurso.continuo; },
    sortByCursoDesc: (a, b) => { return b.conceitoCurso.continuo - a.conceitoCurso.continuo; }
};

const opts = [
    {id: 1, label: "Maior Conceito Enade", value: '1', strategy: strategies.sortByEnadeDesc },
    {id: 2, label: "Menor Conceito Enade", value: '2', strategy: strategies.sortByEnadeAsc},
    {id: 3, label: "Maior Conceito Curso", value: '3', strategy: strategies.sortByCursoDesc},
    {id: 4, label: "Menor Conceito Curso", value: '4', strategy: strategies.sortByCursoAsc}
];

export default class CursoPaging extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sortOptionValue: '1',
            page: 1,
            size: 10
        }
    }

    // TODO: maybe not the best approatch to update state based on props
    // Return to page 1 when receive new data
    componentDidUpdate(prevProps) {
        if(this.props !== prevProps){
            this.setState({page: 1})
        }
    }

    handleSortChange = (sortOptionValue) => {
        this.setState({ sortOptionValue })
    }

    handlePageChange = (event, page) => {
        this.setState({page});
    }

    render() {
        
        const {sortOptionValue, page, size} = this.state;
        const {cursos} = this.props;
        const numberOfPages = Math.ceil( cursos.length / size ); // round up

        // filter options to return only id, label and value
        const sortOptions = opts.map( opt => {
            let {id, label, value} = opt;
            return {id, label, value};
        })

        // sort 'cursos' using current strategy
        const sorted = cursos;
        let findOpt = opts.find( opt => opt.value === sortOptionValue );
        if(findOpt) {
            sorted.sort( findOpt.strategy )
        }

        // select items based on page and size
        const firstIndex = ((page-1)*size); // ex.: page:2, size:10 return 10
        const lastIndex = firstIndex+size-1; // ex.: page:2, size:10 return 19
        const rows = sorted.slice(firstIndex, lastIndex);

        return (
            <div className="CursoPaging">
                <Container>
                    <div className="header">
                        <PagingToolBar
                            results={cursos.length}
                            sortOptionValue={sortOptionValue}
                            sortOptions={sortOptions}
                            onSort={this.handleSortChange}/>
                    </div>
                    
                    <Divider />

                    <div className="content">
                        <Pagination
                            page={page}
                            count={numberOfPages}
                            onChange={this.handlePageChange}
                        />
                        <CursoPagingRows cursos={rows} />
                    </div>
                </Container>
            </div>
        )
    }
}
