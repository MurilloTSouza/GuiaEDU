import React from 'react'
import Slideshow from '../slideshow/Slideshow'
import CompareItem from './compareItem/CompareItem'
import CompareItems from './CompareItems'

export default function Compare({title, subtitle, data, options, getValue}) {

    let enades = options.map( opt => {
        
        let cursos = data.filter( c => {
            return (getValue(c) === opt)
                && (c.conceitoEnade.faixa !== 0)
        })

        let conceitos = cursos.map( c => c.conceitoEnade.faixa )

        return <CompareItem key={opt}
                    label={opt}
                    values={conceitos}
                />
    })

    let cpcs = options.map( opt => {
        
        let cursos = data.filter( c => {
            return (getValue(c) === opt)
                && (c.conceitoCurso.faixa !== 0)
        })

        let conceitos = cursos.map( c => c.conceitoCurso.faixa )

        return <CompareItem key={opt}
                    label={opt}
                    values={conceitos} pink/>
    })

    const slides = [
        <CompareItems enade title={title} subtitle={subtitle}> {enades} </CompareItems>,
        <CompareItems cpc  title={title} subtitle={subtitle}> {cpcs} </CompareItems>
    ]

    return (
        <div>
            <Slideshow slides={slides} />
        </div>
    )
}
