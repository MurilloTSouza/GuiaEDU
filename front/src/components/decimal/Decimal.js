import React from 'react'
import { Typography } from '@material-ui/core'

const styles = {
    integerValue: {
        fontSize: '48px',
        lineHeight: '60px'
    },

    decimalValue: {
        fontSize: '24px',
    }
}

export default function Decimal({value}) {

    // only 2 decimals
    let rounded = (Math.round(value * 100) / 100).toFixed(2);

    const strValues = rounded.toString().split('.');

    const integer = strValues[0];
    const decimal = strValues[1] ? '.'+strValues[1] : '';

    return (
        <Typography component="div" style={{fontWeight: "bolder"}}>
            <span style={styles.integerValue}>
                {integer}
            </span>
            <span style={styles.decimalValue}>
                {decimal}
            </span>
        </Typography>
    )
}
