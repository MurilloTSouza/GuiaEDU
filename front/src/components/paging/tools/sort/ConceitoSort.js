import React from 'react'
import Selector from '../../form/input/selector/Selector'

export const sortOptions = {
    maiorEnade: 'conceitoEnade.continuo,desc',
    menorEnade: 'conceitoEnade.continuo,asc',
    maiorCurso: 'conceitoCurso.continuo,desc',
    menorCurso: 'conceitoCurso.continuo,asc'
}

export default function ConceitoSort({value, onChange}) {

    const sortItems = [
        {id: 1, label: "Maior Conceito Enade", value: sortOptions.maiorEnade},
        {id: 2, label: "Menor Conceito Enade", value: sortOptions.menorEnade},
        {id: 3, label: "Maior Conceito Curso", value: sortOptions.maiorCurso},
        {id: 4, label: "Menor Conceito Curso", value: sortOptions.menorCurso}
    ]

    const filterChange = (e) => {
        onChange(e.target.value)
    }

    return (
        <div className="ConceitoSort">
            <Selector required
                name="sort"
                value={value}
                labelOpts={sortItems}
                onChange={filterChange}
            />       
        </div>
    )
}
