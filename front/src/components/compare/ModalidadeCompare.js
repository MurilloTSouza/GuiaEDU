import React from 'react'
import Compare from './Compare';

export default function ModalidadeCompare({data, area}) {

    const regioes = ['Presencial', 'A Distância'];

    return (
        <Compare
            title="Modalidade de ensino"
            subtitle={"("+area+")"}
            data={data}
            options={regioes}
            getValue={(c) => {return c.modalidade}}
        />
    )
}