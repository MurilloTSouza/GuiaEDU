import React from 'react'
import { Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

import './ConceitoInfo.css'

export default function ConceitoInfo({label, value, color}) {
    return (
        <div className="ConceitoInfo">
            <Typography>{label}</Typography>
            <Rating
                style={{color}}
                value={value}
                readOnly
            />
        </div>
    )
}
