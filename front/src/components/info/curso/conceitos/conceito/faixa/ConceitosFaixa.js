import React from 'react'
import ConceitoFaixaCurso from './ConceitoFaixaCurso'
import ConceitoFaixaEnade from './ConceitoFaixaEnade'

import './ConceitosFaixa.css'

export default function ConceitosFaixa({enade, curso}) {
    return (
        <div className="ConceitosFaixa">
            <div className="conceito">
                <ConceitoFaixaEnade value={enade}/>
            </div>
            <div className="conceito">
                <ConceitoFaixaCurso value={curso}/>
            </div>
        </div>
    )
}
