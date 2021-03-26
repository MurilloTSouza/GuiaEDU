import React from 'react'
import CursoPagingRow from './CursoPagingRow'

import './CursoPagingRows.css'

export default function CursoPagingRows({cursos}) {

    const rows = cursos.map( curso => {
        return <CursoPagingRow curso={curso} key={curso.codCurso} />
    })

    return (
        <div className="CursoPagingRows">
            {rows}
        </div>
    )
}
