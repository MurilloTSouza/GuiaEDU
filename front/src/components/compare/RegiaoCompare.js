import React from 'react'
import Compare from './Compare';

export default function RegiaoCompare({data, area}) {

    const regioes = ['Norte', 'Nordeste', 'Centro Oeste', 'Sudeste', 'Sul'];

    return (
        <Compare
            title="Região"
            subtitle={"("+area+")"}
            data={data}
            options={regioes}
            getValue={(c) => {return c.instituicao.endereco.regiao}}
        />
    )
}
