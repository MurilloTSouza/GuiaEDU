import React from 'react'
import { IconButton, Paper } from '@material-ui/core'
import { Close } from '@material-ui/icons'

import './Toast.css'

export default function Toast({children, onClose}) {

    return (
        <div className="Toast">
            <Paper>
                <div className="toast-action">
                    <IconButton onClick={onClose}>
                        <Close/>
                    </IconButton>
                </div>
                <div className="toast-content">
                    {children}
                </div>
            </Paper>
        </div>
    )
}
