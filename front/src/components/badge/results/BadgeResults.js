import React from 'react'
import { Chip } from '@material-ui/core';

export default function BadgeResults({quant, color}) {

    let label = ( quant === 1 )
        ? quant + " Resultado." 
        : quant + " Resultados."

    // display red if 0 results
    if(quant === 0){ color = 'secondary' }

    return (
        <Chip
            label={label} 
            color={color}
        />
    )
}
