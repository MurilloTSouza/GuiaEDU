import { Paper } from '@material-ui/core'
import React from 'react'
import IesInfos from '../../../../info/ies/iesInfos/IesInfos'

import './CursoRankingCard.css'

export default function CursoRankingCard({curso}) {
    return (
        <div className="CursoRankingCard">
            <Paper>
                <IesInfos ies={curso.instituicao} />
            </Paper>
        </div>
    )
}
