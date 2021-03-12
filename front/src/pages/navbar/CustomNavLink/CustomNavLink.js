import React from 'react'
import { Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

import './CustomNavLink.css'

export default function CustomNavLink({to, exact, children}) {
    return (
        <div className="CustomNavLink">
            <Typography component="div" variant="h6">
                <NavLink exact={exact} to={to}>
                        {children}
                </NavLink>
            </Typography>
        </div>
    )
}
