import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'

const detailStyle = {
    display: 'inherit',

    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderTop: '1px solid rgba(0, 0, 0, 0.2)'
}

export default function CustomAccordion({title, children}) {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />} >
                <Typography>{title}</Typography>
            </AccordionSummary>
            
            <AccordionDetails style={detailStyle}>
                {children}
            </AccordionDetails>
        </Accordion>
    )
}
