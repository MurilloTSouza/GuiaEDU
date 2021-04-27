import React from 'react'
import { Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import Decimal from '../../../../../decimal/Decimal'

import './ConceitoContinuo.css'

export default function ConceitoContinuo({label, value, color}) {

    return (
        <div className="ConceitoContinuo">
            <Decimal value={value}/>
            
            <Rating readOnly
                style={{color}}
                value={value}
                precision={0.1}
            />

            <Typography variant="body2" color="textSecondary">
                {label}
            </Typography>
        </div>
    )
}
