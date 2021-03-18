import React from 'react'
import { FormControlLabel, Switch } from '@material-ui/core';

const switchControlStyle = {
    margin: 0, 
    width: '100%',
    borderRadius: '20px',
};

export default function SwitchLabel({label, checked, onChange}) {

    // Dinamically setting background color of switch control
    var switchControlColor = checked
        ? "rgba(63, 81, 181, 0.1)"  // light blue
        : "rgba(0, 0, 0, 0.1)";     // gray

    var style = {
        backgroundColor: switchControlColor,
        ...switchControlStyle
    };

    return (
        <FormControlLabel style={style}
            control={
                <Switch
                    checked={checked}
                    onChange={onChange}
                    color="primary"
                />
            }
            label={label}
         />
    )
}
