import { Grid, Link, Typography } from '@material-ui/core'
import React from 'react'

export default function IconInfo({icon, info, link}) {

    const Icon = icon;

    const content = link

        // if link
        ? ( <Link 
                rel="noopener noreferrer" 
                target="_blank" 
                href={'http://'+info}>
            <Typography>{info}</Typography>
        </Link> )
        
        // else
        : <Typography> {info} </Typography>

    return (
        <Grid container
            spacing={2}
            alignItems="flex-start"
        >
            <Grid item> <Icon /> </Grid>

            <Grid item xs> {content} </Grid>

        </Grid>
    )
}
