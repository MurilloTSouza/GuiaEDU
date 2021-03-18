import React, { Component } from 'react'
import { Container, Divider, Grid, Typography } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import SearchForm from '../../components/form/SearchForm'
import CursoRankingCardList from '../../components/ranking/card/curso/list/CursoRankingCardList'
import ConceitoSort, { sortOptions } from '../../components/ranking/sort/ConceitoSort'

import './RankingPage.css'

const styles = {
    searchColumn : {
        maxHeight: '100%',
        width: '280px'
    }
}

export default class RankingPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            data: [],
            totalPages: 0,

            pagination: {
                page: 0,
                size: 10,
                sort: sortOptions.maiorEnade
            }
            
        }
    }

    handleSearchResult = (searchResult) => {
        console.log(searchResult)
        this.setState({
            data: searchResult.content,
            totalPages: searchResult.totalPages
        })
    }

    handleSortChange = (value) => {
        this.setState({
            pagination: { 
                ...this.state.pagination,
                sort: value 
            }
        })
    }

    handlePageChange = (event, value) => {
        this.setState({
            pagination: {
                ...this.state.pagination,
                page: value-1
            }
        })
    }

    render() {

        const {data, totalPages, pagination} = this.state;

        let list = data 
            ? <CursoRankingCardList cursos={data} />
            : null;

        return (
            <div className="RankingPage">
                <Grid container>

                    <Grid item style={styles.searchColumn}>
                        <SearchForm
                            cursoOnly automaticSubmit
                            pagination={pagination}
                            onResult={this.handleSearchResult} />
                    </Grid>

                    <Grid item xs={12} sm>
                        <Container>
                            <div className="tools">
                                <div className="tool">
                                    <Typography>Ordenar Por:</Typography>
                                </div>
                                <div className="tool">
                                    <ConceitoSort 
                                        value={pagination.sort}
                                        onChange={this.handleSortChange}
                                    />
                                </div>
                            </div>

                            <Divider />

                            <div className="data-display">
                                <div className="pagination">
                                    <Pagination
                                        siblingCount={2}
                                        count={totalPages}
                                        onChange={this.handlePageChange}
                                    />
                                </div>

                                <div className="data">
                                    {list}
                                </div>
                            </div>

                        </Container>
                    </Grid>

                </Grid>
            </div>
        )
    }
}

