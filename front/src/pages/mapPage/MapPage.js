import React, { Component } from 'react'
import Map from '../../components/map/Map'
import SearchForm from '../../components/form/SearchForm'
import { Grid } from '@material-ui/core'
import Toast from '../../components/toast/Toast'
import { deselectCurrentMarker } from '../../resource/map-ol/map-ol'
import IesCard from '../../components/card/iesCard/IesCard'
import CursoCard from '../../components/card/cursoCard/CursoCard'

import './MapPage.css'
import BadgeResults from '../../components/badge/results/BadgeResults'

const styles = {
    grid: {
        height: '100%'
    },
    searchColumn: {
        height: '100%', //used to activate the form scroll
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        zIndex: 1
    }
};

export default class MapPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            searchResult: null,
            infoType: null,
            selectedInfo: null
        }
    }

    handleSearchResult = (searchResult, infoType) => {
        this.setState({searchResult, infoType, selectedInfo: null})
    }

    selectInfo = (info) => {
        this.setState({selectedInfo: info})
    }

    deselectInfo = () => {
        this.selectInfo(null);
        deselectCurrentMarker(); // imported from map-ol.js
    }

    render() {
        const {searchResult, infoType, selectedInfo} = this.state;

        // rendering toast
        let toastContent = infoType==='ies'
            ? <IesCard ies={selectedInfo} />
            : <CursoCard curso={selectedInfo} />

        // rendering quantity of results
        const bagdeResults = searchResult
            ? <BadgeResults quant={searchResult.length} color="primary"/>
            : null        

        return (
            <div className="MapPage">
                <Grid container style={styles.grid}>
    
                    <Grid item style={styles.searchColumn}>
                        <div className="search-container">
                            <SearchForm onResult={this.handleSearchResult}/>
                        </div>
                    </Grid>
    
                    <Grid item xs={12} sm>
                        <div className="map-container">

                            <div className="badge-wrapper">
                                {bagdeResults}
                            </div>

                            <Map
                                data={searchResult}
                                dataType={infoType}
                                onSelect={this.selectInfo}
                            />
                        </div>
                    </Grid>
    
                </Grid>

                { selectedInfo && 
                    <Toast onClose={this.deselectInfo}>
                        {toastContent}
                    </Toast>
                }
            </div>
        )
    }
}