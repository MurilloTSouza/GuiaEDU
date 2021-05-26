import React from 'react'
import Compare from './Compare';

export default function RedeCompare({data, area}) {

    const redes = ['Estadual', 'Federal', 'Municipal', 'Privada'];

    return (
        <Compare
            title="Rede de ensino"
            subtitle={"("+area+")"}
            data={data}
            options={redes}
            getValue={(c) => {return c.instituicao.administracao}}
        />
    )
}