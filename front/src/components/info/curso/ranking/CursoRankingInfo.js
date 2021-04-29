import React from 'react'
import { Divider, Grid } from '@material-ui/core';
import Title from '../../../title/Title';
import ConceitoContinuoEnade from '../conceitos/conceito/continuo/ConceitoContinuoEnade';
import ConceitoContinuoCurso from '../conceitos/conceito/continuo/ConceitoContinuoCurso';

import './CursoRankingInfo.css'

export default function CursoRankingInfo({curso}) {
    const ies = curso.instituicao;
    let title = ies.sigla ? ies.nome+' - '+ies.sigla : ies.nome;
    title = title+' - '+ies.endereco.municipio;

    const concEnade = curso.conceitoEnade.continuo;
    const concCurso = curso.conceitoCurso.continuo;

    // TODO: empty grid item reserved to put ranking number. ex.: 1º, 2º, 3º...
    // using <Avatar> {value} </Avatar>
    return (
        <div className="CursoRankingInfo">
            <div className="title">
                <Grid container>
                    <Grid item>
                    </Grid>

                    <Grid item xs>
                        <Title textAlign="center">
                            {title}
                        </Title>
                    </Grid>
                </Grid>
            </div>

            <Divider />

            <div className="body">
                <Grid container>
                    <Grid item xs={12}>
                        <Title textAlign="center"> {curso.area} </Title>
                    </Grid>

                    <Grid item xs={6}>
                        <ConceitoContinuoEnade value={concEnade} />
                    </Grid>
                    <Grid item xs={6}>
                        <ConceitoContinuoCurso value={concCurso} />
                    </Grid>
                </Grid>
                
            </div>
        </div>
    )
}
