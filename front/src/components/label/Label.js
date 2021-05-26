import React from 'react'
import { Typography } from '@material-ui/core'

const style = {
    display: 'inline',
    padding: '6px 12px',
    border: '2px solid',
    borderRadius: '16px'
}

export default function Label({color, children}) {

    const dynStyle = {
        color: color,
        borderColor: color
    }

    return (
        <Typography 
            variant="caption"
            style={{...style, ...dynStyle}}
            component="div">

            {children}

        </Typography>
    )
}
