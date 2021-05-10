import React from 'react'
import { Typography } from '@material-ui/core'

const styles = {
    column: {
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        boxSizing: 'border-box',
        height: '100%',
        width: '24px',
        padding: '4px',
        textAlign: 'center'
    },
    maxBar: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.06)',
        marginTop: '24px', //extra space to quant label when 100%
    },
    quant: {
        position: 'relative',
        top: '-24px'
    }
}

export default function GraphColumn({values, max, label, color}) {

    var filtered = values.filter(v => v===label);
    
    const quant = filtered.length;
    const percentage = Math.floor((quant/max)*100);

    const barValueStyle = {
        height: percentage+"%",
        transition: "height 1s",
        backgroundColor: color
    };

    return (
        <div style={styles.column}>

            <div style={styles.maxBar}>
                <div style={barValueStyle}>
                    <Typography style={styles.quant}>
                        {quant}
                    </Typography>
                </div>
            </div>

            <Typography variant="caption">{label}</Typography>
        </div>
    )
}
