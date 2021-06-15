import React from 'react'
import { Typography } from '@material-ui/core'
import { ArrowForwardIos } from '@material-ui/icons'

const styles = {
    icon: {
        verticalAlign: 'text-bottom',
        height: '1.5rem',
    },
    guia: {
        marginLeft: '-4px',
        fontSize: '1.5rem'
    },
    edu: {
        fontWeight: 'bold',
        fontSize: '1.5rem'
    }
}

export default function Logo() {
    return (
        <div>
            <ArrowForwardIos color='primary' style={styles.icon}/>
            <Typography style={styles.guia}
                component='span' 
                color='textPrimary'>
                Guia
            </Typography>
            <Typography style={styles.edu}
                component='span' 
                color='primary'>
                EDU
            </Typography>
        </div>
    )
}
