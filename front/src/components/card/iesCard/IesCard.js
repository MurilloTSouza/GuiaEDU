import React from 'react'
import CustomTabs from '../../customTabs/CustomTabs';
import CursoList from '../../info/curso/cursoList/CursoList';
import IesInfos from '../../info/ies/iesInfos/IesInfos';
import Title from '../../title/Title';
import Card from '../Card';

import './IesCard.css'

export default function IesCard({ies}) {

    let title = ies.sigla ? ies.nome+' - '+ies.sigla : ies.nome;
    title = title+' - '+ies.endereco.municipio;

    const infoTab = <IesInfos ies={ies} />

    const cursosTab = <CursoList cursos={ies.cursos}/>

    const tabs = [
        { id: 0, label: 'Detalhes', content: infoTab },
        { id: 1, label: 'Cursos', content: cursosTab }
    ]

    const header = <Title variant="h6">{title}</Title>

    const body = <CustomTabs tabs={tabs} />

    return (
        <div className="IesCard">
            <Card header={header} body={body}/>
        </div>
    )
}
