import React from 'react'
import { AppBar, Toolbar} from '@material-ui/core'
import CustomNavLink from './CustomNavLink/CustomNavLink'
import Logo from './logo/Logo'

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
                    <Logo />
                </div>

                <CustomNavLink exact to="/"> MAPA </CustomNavLink>
                <CustomNavLink to="/ranking"> RANKING </CustomNavLink>
                <CustomNavLink to="/comparar"> COMPARAR </CustomNavLink>
                
            </Toolbar>
        </AppBar>
    )
}
