import React, { PureComponent } from 'react'
import { renderMap, addMarkersOf } from '../../resource/map-ol/map-ol'

import './Map.css'

export default class Map extends PureComponent {

    handleMarkerSelect = (data) => {
        this.props.onSelect(data)
    }

    componentDidMount(){ renderMap(this.handleMarkerSelect); }

    render() {
        const {data, dataType} = this.props;
        if(data && dataType) addMarkersOf(data, dataType);

        return ( <div id='map'/> )
    }
}
