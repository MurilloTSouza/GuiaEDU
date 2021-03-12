import { Feature } from "ol";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import { Style, Icon } from "ol/style";

const SVG_MARKER =
'<svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">'+
    '<path fill="#ffffff" d="M18,9c0,3.314-6,11-6,11S6,12.314,6,9s2.686-6,6-6S18,5.686,18,9z"></path>'+
    '<path fill="#dddddd" d="M12,11.5c-1.381,0-2.5-1.119-2.5-2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5C14.5,10.381,13.381,11.5,12,11.5z"></path>'+
    '<path fill="#cccccc" d="M12,2.01c-3.856,0-6.993,3.137-6.993,6.993c0,4.483,5.968,11.767,6.222,12.074L12,22.012l0.771-0.935c0.254-0.308,6.222-7.591,6.222-12.074C18.993,5.146,15.856,2.01,12,2.01z M12,18.827c-1.878-2.463-4.993-7.115-4.993-9.824C7.007,6.25,9.247,4.01,12,4.01s4.993,2.24,4.993,4.993C16.993,11.708,13.878,16.362,12,18.827z"></path>'+
'</svg>';

// build markers based on data, and add name flag to it
export const buildMarkers = (data, name) => {
    return data.map( d => {
        var point = new Feature({
            geometry: new Point(
                fromLonLat([ d.lon, d.lat ])
            ),
            name: name,
            info: d.info,
        })
        point.setStyle( buildDefaultMarkerStyle() )
        return point;
    })
}

export const buildDefaultMarkerStyle = () => {
    return buildMarkerStyle('#6c8492'); // default color (gray)
}

export const buildActiveMarkerStyle = () => {
    return buildMarkerStyle('#ea4335'); // active color (red)
}

// build marker using svg, and setting color
function buildMarkerStyle(color) {
    return new Style({
        image: new Icon({
            src: 'data:image/svg+xml;utf8,' + escape(SVG_MARKER),
            color: color,
            opacity: 1,
            scale: 1.2,
            anchor: [0.5, 1], //anchor to center-bottom
        })
    })
}