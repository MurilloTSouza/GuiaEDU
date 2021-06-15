import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import Zoom from 'ol/control/Zoom'
import { fromLonLat } from 'ol/proj'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import { buildActiveMarkerStyle, buildDefaultMarkerStyle, buildMarkers } from './marker'

import './map-ol.css'

const VIEW_CENTER = [-54, -16]; //Brazil
const INITIAL_ZOOM = 4;
const MAX_ZOOM = 18;

// used to idenfity type of feature
const MARKER_NAME = 'MARKER';

// both used to identify type of marker
const IES_TYPE = 'ies';
const CURSO_TYPE = 'curso';

// reference to map
var map; 

// reference to the current markers beeing displayed
// used to remove from map when updating markers
var currentMarkers;

// reference to active marker
// used to change color back to gray
var activeMarker;

// instantiate map and set callback to onClick in markers
export const renderMap = (onSelect) => {
    map = new Map({
        target: 'map',
        layers:[ new TileLayer( {source: new OSM()} ) ],
        controls:[ new Zoom( {className: 'zoom'} )],
        view: new View( {center: fromLonLat(VIEW_CENTER), zoom: INITIAL_ZOOM, maxZoom: MAX_ZOOM} )
    })

    // onClick in marker call onSelect method
    map.on('click', (evt) => {
        var feature = map.forEachFeatureAtPixel(
            evt.pixel,
            (feature) => { return feature; });

        if(feature && feature.get('name')===MARKER_NAME) {
            selectMarker(feature)
            onSelect( feature.get('info') )
        }
    })

    return map;
}

// changing active marker back to default
// and feature to active
function selectMarker(feature) {
    deselectCurrentMarker();
    feature.setStyle( buildActiveMarkerStyle() );
    activeMarker = feature;
}

export const deselectCurrentMarker = () => {
    if(activeMarker) activeMarker.setStyle( buildDefaultMarkerStyle() );
}

// choose witch type of marker should be add to map based on 'dataType'
export const addMarkersOf = (data, dataType) => {
    if(dataType === IES_TYPE) addIesMarkers(data)
    else if(dataType === CURSO_TYPE) addCursoMarkers(data)
}

// build markers based on data of type IES provided and add to map
function addIesMarkers(ies) {
    var data = ies.map( i => {
        return {
            info: { ...i, type: IES_TYPE },
            lon: i.coordenadas.longitude,
            lat: i.coordenadas.latitude
        }
    });
    addMarkers(data);
}

// build markers based on data of type CURSO provided and add to map
function addCursoMarkers(cursos) {
    var data = cursos.map( c => {
        return {
            info: { ...c, type: CURSO_TYPE },
            lon: c.instituicao.coordenadas.longitude,
            lat: c.instituicao.coordenadas.latitude
        }
    });
    addMarkers(data);
}

// build markers based on data provided and add to map
function addMarkers(data) {

    // remove current markers and add new ones
    if(currentMarkers) map.removeLayer(currentMarkers);

    if(!data.length) return; // if data is empty, don't add markers

    var points = buildMarkers(data, MARKER_NAME);
    let source = new VectorSource({ features: points });
    let markers = new VectorLayer({ source: source });

    map.addLayer(markers)
    map.getView().fit(
        source.getExtent(),
        { padding: [40, 40, 40, 40], duration: 1000 }
    )
    currentMarkers = markers;
    return map;
}


