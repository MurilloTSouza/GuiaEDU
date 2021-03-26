import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import SearchForm from '../../components/form/SearchForm'
import CursoPaging from '../../components/paging/curso/CursoPaging'

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
            searchResult: []
        }
    }

    handleSearchResult = (searchResult) => {
        this.setState({ searchResult })
    }

    render() {
        const {searchResult} = this.state;

        return (
            <div className="RankingPage">
                <Grid container>

                    <Grid item style={styles.searchColumn}>
                        <SearchForm
                            cursoOnly automaticSubmit ranking
                            onResult={this.handleSearchResult} />
                    </Grid>

                    <Grid item xs={12} sm>
                        <CursoPaging cursos={searchResult}/>
                    </Grid>

                </Grid>
            </div>
        )
    }
}

