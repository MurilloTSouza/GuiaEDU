import React from 'react'
import Error from '../../../progress/error/Error'
import CursoPagingRow from './CursoPagingRow'

import './CursoPagingRows.css'

export default function CursoPagingRows({cursos}) {

    if(!cursos || !cursos.length) {
        return <Error msg="Nenhum resultado." />
    }

    const rows = cursos.map( curso => {
        return <CursoPagingRow curso={curso} key={curso.codCurso} />
    })

    return (
        <div className="CursoPagingRows">
            {rows}
        </div>
    )
}
