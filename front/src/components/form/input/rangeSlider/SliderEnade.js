import React from 'react'
import RangeSlider from './RangeSlider'

export default function SliderEnade({values, onChange, disabled}) {
    return (
        <RangeSlider disabled={disabled}
            label="Conceito Enade"
            values={values}
            color="#ffb400"
            onChange={onChange}
        />
    )
}
