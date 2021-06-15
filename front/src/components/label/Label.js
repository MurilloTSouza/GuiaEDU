import React from 'react'
import { Typography } from '@material-ui/core'

const style = {
    display: 'inline',
    padding: '6px 12px',
    borderRadius: '16px',
    fontWeight: 'bold'
}

export default function Label({color, children}) {

    const dynStyle = {
        color: "white",
        backgroundColor: color
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
