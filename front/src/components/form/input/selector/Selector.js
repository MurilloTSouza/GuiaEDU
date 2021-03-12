import React from 'react'
import { InputLabel, MenuItem, Select } from '@material-ui/core'

import './Selector.css'

const styles = {
    fullWidth: {width: '100%'}
};

export default function Selector({name, label, value, onChange, options, required, disabled}) {

    // Empty value if is not required
    let emptyLabel = 'Qualquer '+label;
    let emptyOption = !required
        ? ( <MenuItem value=''> {emptyLabel} </MenuItem> )
        : null;

    let opts = options
        ? options.map( opt => {
            return ( <MenuItem value={opt} key={opt}> {opt} </MenuItem> )
        })
        : null;

    return (
        <div className="Selector">

            <InputLabel id={name} shrink>
                {label}
            </InputLabel>

            <Select displayEmpty disabled={disabled}
                name={name} labelId={name}
                value={value}
                onChange={onChange}
                style={styles.fullWidth}
            >

                {emptyOption}
                {opts}

            </Select>

        </div>
    )
}
