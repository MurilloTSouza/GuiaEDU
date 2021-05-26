import { IconButton } from '@material-ui/core';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import React, { useState } from 'react'

const styles = {
    slideshow: {
        position: 'relative'
    },
    prev: {
        position: 'absolute',
        top: '50%',
        left: '20px'
    },
    next: {
        position: 'absolute',
        top: '50%',
        right: '20px'
    }
}

export default function Slideshow({slides}) {

    const FIRST = 0;
    const LAST = slides.length - 1;

    let [index, setIndex] = useState(0);

    const prev = () => { setIndex(index-1) }

    const next = () => { setIndex(index+1) }

    return (
        <div style={styles.slideshow}>
            {slides[index]}
            
            <IconButton style={styles.prev}
                onClick={prev} 
                disabled={index===FIRST}>
                <NavigateBefore fontSize="large"/>
            </IconButton>

            <IconButton style={styles.next}
                onClick={next} 
                disabled={index===LAST}>
                <NavigateNext fontSize="large"/>
            </IconButton>

            <div style={styles.dot}>

            </div>
        </div>
    )
}
