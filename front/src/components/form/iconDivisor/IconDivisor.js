import React from 'react'
import { Divider, Grid, Typography } from '@material-ui/core'

export default function IconDivisor({label, icon, active}) {

    let textColor = active ? "primary" : "textSecondary";
    let iconColor = active ? "primary" : "disabled";

    const Icon = icon;

    return (
        <Grid container style={{paddingTop: '10px'}}>

            <Grid item>
                <Icon color={iconColor} style={{marginLeft: '-2px'}}/>
            </Grid>

            <Grid item xs>
                <Typography variant="caption" color={textColor}>
                    {label}
                </Typography>
                <Divider />
            </Grid>

        </Grid>
    )
}
