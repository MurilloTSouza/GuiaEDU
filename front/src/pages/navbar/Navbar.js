import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import Title from '../../components/title/Title'
import CustomNavLink from './CustomNavLink/CustomNavLink'

import './Navbar.css'

const styles = {
    appbar: {
        height: 'inherit', // same as the nav-bar height defined in App.css
        position: 'fixed',
        backgroundColor: 'white',
    }
}

export default function Navbar() {
    return (
        <AppBar style={styles.appbar}>
            <Toolbar>

                <div className="nav-title">
                    <Title color="text.primary" variant="h5">
                        TITLE
                    </Title>
                </div>

                <CustomNavLink exact to="/"> MAPA </CustomNavLink>
                <CustomNavLink to="/ranking"> RANKING </CustomNavLink>
                <CustomNavLink to="/comparar"> COMPARAR </CustomNavLink>
                
            </Toolbar>
        </AppBar>
    )
}
