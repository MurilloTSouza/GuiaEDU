import React from 'react'
import { Chip } from '@material-ui/core';
import { OpenInNew } from '@material-ui/icons';

export default function BadgeResults({quant, color, onClick}) {

    let label = ( quant == 1 )
        ? quant + " Resultado." 
        : quant + " Resultados."
        
    label = label+" Ver no Ranking.";

    const onIconClick = () => {
        if(onClick) onClick();
    }

    return (
        <Chip clickable
            label={label} 
            color={color}
            onDelete={onIconClick}
            deleteIcon={<OpenInNew />}
            onClick={onClick}
        />
    )
}
