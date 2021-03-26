import React from 'react'
import { Typography } from '@material-ui/core'
import Sort from './sort/Sort'
import BadgeResults from '../../badge/results/BadgeResults'

import './PagingToolBar.css'

export default function PagingToolBar({sortOptionValue, sortOptions, onSort, results}) {

    // rendering quantity of results
    const bagdeResults = results
        ? (
            <div className="tool">
                <BadgeResults quant={results} color="default"/>
            </div>
        )
        : null 

    return (
        <div className="PagingToolBar">
            
            {bagdeResults}

            <div style={{flexGrow: 1}}/>

            <div className="tool">
                <Typography>Ordenar Por:</Typography>
            </div>

            <div className="tool">
                <Sort
                    value={sortOptionValue}
                    options={sortOptions}
                    onChange={onSort}    
                />
            </div>
            
        </div>
    )
}
