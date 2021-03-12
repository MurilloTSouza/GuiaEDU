import React from 'react'
import RangeSlider from './RangeSlider'

export default function SliderCurso({values, onChange, disabled}) {
    return (
        <RangeSlider disabled={disabled}
            label="Conceito Curso"
            values={values}
            color="#e91e63"
            onChange={onChange}
        />
    )
}
