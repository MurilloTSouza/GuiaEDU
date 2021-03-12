import React from 'react'
import { CircularProgress } from '@material-ui/core'

import './Loading.css'

export default function Loading() {
    return (
        <div className="Loading">
            <CircularProgress/>
        </div>
    )
}
