import React from 'react'
import LocalDivisor from './LocalDivsor'
import Selector from '../../input/selector/Selector'

export default function LocalGroup({values, options, setParams}) {

    // Getting current selected objects from options
    const currentRegiao = options.regioes.find( reg => reg.regiao === values.regiao );
    const currentEstado = currentRegiao.estados.find( est => est.estado === values.estado );

    // Getting options based on current selected objects
    const regioes = options.regioes.map( opt => { return opt.regiao } );
    const estados = currentRegiao.estados.map( est => { return est.estado } );
    const municipios = currentEstado ? currentEstado.municipios : [];

    const handleRegiaoChange = (e) => {
        setParams({
            regiao: e.target.value,
            estado: '',
            municipio: ''
        })
    }

    const handleEstadoChange = (e) => {
        setParams({
            estado: e.target.value,
            municipio: ''
        })
    }

    const handleMunicipioChange = (e) => {
        setParams({
            municipio: e.target.value
        })
    }

    return (
        <div className="form-group">
            <LocalDivisor active/>
            <Selector required
                name='regiao'
                label='Região'
                value={values.regiao}
                options={regioes}
                onChange={handleRegiaoChange} />
            <Selector
                name='estado'
                label='Estado'
                value={values.estado}
                options={estados}
                onChange={handleEstadoChange} />
            <Selector
                name='municipio'
                label='Município'
                value={values.municipio}
                options={municipios}
                onChange={handleMunicipioChange} />
        </div>
    )
}
