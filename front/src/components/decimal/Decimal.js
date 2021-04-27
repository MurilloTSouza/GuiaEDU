import React from 'react'
import { Typography } from '@material-ui/core'

const styles = {
    integerValue: {
        fontSize: '36px',
        lineHeight: '36px'
    },

    decimalValue: {
        fontSize: '24px'
    }
}

export default function Decimal({value}) {

    const strValues = value.toString().split('.');

    const integer = strValues[0];
    const decimal = strValues[1] ? '.'+strValues[1] : '';

    return (
        <Typography component="div">
            <span style={styles.integerValue}>
                {integer}
            </span>
            <span style={styles.decimalValue}>
                {decimal}
            </span>
        </Typography>
    )
}
