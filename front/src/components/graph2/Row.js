import React from 'react'
import { Typography } from '@material-ui/core'
import Graph2Bar from './Graph2Bar'

const styles = {
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: '12px'
    },
    label: {
        marginRight: '12px'
    }
}

export default function Row({label, values, color}) {
    return (
        <div style={styles.row}>
            <Typography style={styles.label}>{label}</Typography>
            <Graph2Bar values={values} color={color}/>
        </div>
    )
}
