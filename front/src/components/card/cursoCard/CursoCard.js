import React from 'react'
import { Typography } from '@material-ui/core';
import CustomAccordion from '../../customAccoordion/CustomAccordion';
import ConceitosFaixa from '../../info/curso/conceitos/conceito/faixa/ConceitosFaixa';
import IesInfoList from '../../info/ies/iesInfos/IesInfos';
import Title from '../../title/Title'
import Card from '../Card';

export default function CursoCard({curso}) {

    const enadeValue = curso.conceitoEnade.faixa;
    const cursoValue = curso.conceitoCurso.faixa;

    const header = (<>
        <Title variant="h6" textAlign="center">{curso.area}</Title>
        <Typography variant="caption" align="center" display="block">({curso.modalidade})</Typography>
        <ConceitosFaixa enade={enadeValue} curso={cursoValue}/>
    </>)

    const ies = curso.instituicao;
    let iesTitle = ies.sigla ? ies.nome+' - '+ies.sigla : ies.nome;
    iesTitle = iesTitle+' - '+ies.endereco.municipio;

    const body = (
        <CustomAccordion title={iesTitle}>
            <IesInfoList ies={curso.instituicao} />
        </CustomAccordion>
    )

    return ( <Card header={header} body={body} /> )
}
