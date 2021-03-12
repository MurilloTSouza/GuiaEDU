import React from 'react'
import { Box, Typography } from '@material-ui/core'

export default function Title({children, variant, textAlign, color}) {
    return (
        <Typography component="div" variant={variant}>
            <Box textAlign={textAlign} 
                color={color}
                fontWeight="fontWeightBold">
                {children}
            </Box>
        </Typography>
    )
}
