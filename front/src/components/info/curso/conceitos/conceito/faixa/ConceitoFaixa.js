import React from 'react'
import { Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

import './ConceitoFaixa.css'

export default function ConceitoFaixa({label, value, color}) {
    return (
        <div className="ConceitoFaixa">
            <Typography>{label}</Typography>
            <Rating
                style={{color}}
                value={value}
                readOnly
            />
        </div>
    )
}
