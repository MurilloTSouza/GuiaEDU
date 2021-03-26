import React from 'react'
import { Divider, Grid, Paper } from '@material-ui/core'
import CursoRankingInfo from '../../../info/curso/ranking/CursoRankingInfo'
import IesInfos from '../../../info/ies/iesInfos/IesInfos'

import './CursoPagingRow.css'

const styles = {
    gridItem: {
        padding: '24px'
    }
}

export default function CursoPagingRow({curso}) {
    return (
        <div className="CursoPagingRow">
            <Paper>
                <Grid container>
                    <Grid item xs style={styles.gridItem}>
                        <CursoRankingInfo curso={curso} />
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs style={styles.gridItem}>
                        <IesInfos ies={curso.instituicao} />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
