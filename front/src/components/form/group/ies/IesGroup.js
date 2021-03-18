import React from 'react'
import IesDivisor from './IesDivisor'
import Selector from '../../input/selector/Selector'

export default function IesGroup({values, options, onInputChange}) {
    return (
        <div className="form-group">
            <IesDivisor active/>
            <Selector
                name='rede'
                label='Rede'
                value={values.rede}
                options={options.redes}
                onChange={onInputChange} />
            <Selector
                name='organizacao'
                label='Organização'
                value={values.organizacao}
                options={options.organizacoes}
                onChange={onInputChange} />
            <Selector
                name='administracao'
                label='Administração'
                value={values.administracao}
                options={options.administracoes}
                onChange={onInputChange} />
            
        </div>
    )
}
