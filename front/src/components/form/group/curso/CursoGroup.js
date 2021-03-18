import React from 'react'
import SliderCurso from '../../input/rangeSlider/SliderCurso'
import SliderEnade from '../../input/rangeSlider/SliderEnade'
import Selector from '../../input/selector/Selector'
import CursoDivisor from './CursoDivisor'

export default function CursoGroup({values, options, setParams, onInputChange, active}) {
    
    const handleEnadeChange = (values) => {
        setParams({
            min_enade: values[0],
            max_enade: values[1]
        })
    }

    const handleCursoChange = (values) => {
        setParams({
            min_curso: values[0],
            max_curso: values[1]
        })
    }

    return (
        <div className="form-group">
            <CursoDivisor active={active}/>
            
            <Selector disabled={!active} required
                name='area'
                label='Área'
                value={values.area}
                options={options.areas}
                onChange={onInputChange} />

            <Selector disabled={!active}
                name='modalidade'
                label='Modalidade'
                value={values.modalidade}
                options={options.modalidades}
                onChange={onInputChange} />

            <SliderEnade disabled={!active}
                values={values.enade}
                onChange={handleEnadeChange}
            />

            <SliderCurso disabled={!active}
                values={values.curso}
                onChange={handleCursoChange}
            />
        </div>
    )
}
