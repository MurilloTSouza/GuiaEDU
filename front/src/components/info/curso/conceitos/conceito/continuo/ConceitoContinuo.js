import React from 'react'
import { Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

import './ConceitoContinuo.css'

const styles = {
    integerValue: {
        fontSize: '48px',
        lineHeight: '48px'
    },

    decimalValue: {
        fontSize: '24px'
    }
}

export default function ConceitoContinuo({label, value, color}) {
    
    const strValues = value.toString().split('.');

    const integer = strValues[0];
    const decimal = strValues[1] ? '.'+strValues[1] : '';

    return (
        <div className="ConceitoContinuo">
            <Typography component="div">
                <span style={styles.integerValue}>
                    {integer}
                </span>
                <span style={styles.decimalValue}>
                    {decimal}
                </span>
            </Typography>
            
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
