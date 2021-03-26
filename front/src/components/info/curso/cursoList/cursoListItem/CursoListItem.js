import React from 'react'
import { Box, Divider, Typography } from '@material-ui/core';
import ConceitosFaixa from '../../conceitos/conceito/faixa/ConceitosFaixa';

import './CursoListItem.css'

export default function CursoListItem({curso, withDivider}) {

    const enadeValue = curso.conceitoEnade.faixa;
    const cursoValue = curso.conceitoCurso.faixa;

    return (
        <>
            <div className="CursoListItem">
                
                <Typography component="div">
                    <Box textAlign="center" 
                        fontWeight="fontWeightBold">
                        {curso.area}
                    </Box>
                </Typography>

                <ConceitosFaixa enade={enadeValue} curso={cursoValue}/>
            </div>
            { withDivider && <Divider />}
        </>
    )
}
