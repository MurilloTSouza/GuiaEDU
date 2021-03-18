import React from 'react'
import CursoRankingCard from '../card/CursoRankingCard'

export default function CursoRankingCardList({cursos}) {
    
    let list = cursos.map( curso => {
        return (
            <CursoRankingCard
                key={curso.codCurso}
                curso={curso}
            />
        )
    })
    
    return (
        <div className="CursoRankingCardList">
            {list}
        </div>
    )
}
