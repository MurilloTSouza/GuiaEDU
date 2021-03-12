import React from 'react'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'

import './Error.css'
import { Typography } from '@material-ui/core'

export default function Error({msg}) {
    return (
        <div className="Error">
            <div className="wrapper">

                <SentimentVeryDissatisfiedIcon
                    fontSize="large"
                    color="secondary"
                />

                <Typography color="secondary">
                    {msg}
                </Typography>

            </div>
        </div>
    )
}
