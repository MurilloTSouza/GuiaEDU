import React from 'react'

import './TabPanel.css'

export default function TabPanel(props) {
    const { children, value, index } = props;

    if (value !== index) return null ;

    return (
        <div className="TabPanel"> 
            {children}
        </div>
    );
}