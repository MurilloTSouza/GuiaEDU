import React from 'react'
import { Slider, Typography } from '@material-ui/core'

const marks = [
    {value: 0, label: '0'},
    {value: 1, label: '1'},
    {value: 2, label: '2'},
    {value: 3, label: '3'},
    {value: 4, label: '4'},
    {value: 5, label: '5'}
]

export default function RangeSlider({label, values, color, onChange, disabled}) {

    const [value, setValue] = React.useState(values);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        onChange(newValue);
    };

    let style = {marginLeft: '2%', width: '96%'};
    style = disabled ? style : {...style, color};

    return (<>
        <Typography color={ disabled ? "textSecondary":"textPrimary" }>
            {label}
        </Typography>

        <Slider disabled={disabled}
            min={0} max={5} step={1}
            marks={marks} value={value}
            onChange={handleChange}
            style={style} 
        />
    </>)
}