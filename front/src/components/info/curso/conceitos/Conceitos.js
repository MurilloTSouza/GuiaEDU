import React from 'react'
import ConceitoCursoInfo from './conceito/ConceitoCursoInfo'
import ConceitoEnadeInfo from './conceito/ConceitoEnadeInfo'

import './Conceitos.css'

export default function Conceitos({enade, curso}) {
    return (
        <div className="Conceitos">
            <div className="conceito">
                <ConceitoEnadeInfo value={enade}/>
            </div>
            <div className="conceito">
                <ConceitoCursoInfo value={curso}/>
            </div>
        </div>
    )
}
