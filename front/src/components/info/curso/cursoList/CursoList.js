import React from 'react'
import CursoListItem from './cursoListItem/CursoListItem'

export default function CursoList({cursos}) {

    const list = cursos.map( (curso, index, {length}) => {
        const isLastTheOne = (index+1 === length);
        return (
            <CursoListItem
                curso={curso}
                key={curso.codCurso}
                withDivider={!isLastTheOne}
            />
        )
    })

    return (
        <div className="CursoList">
            {list}
        </div>
    )
}
