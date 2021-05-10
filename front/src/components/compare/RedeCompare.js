import React from 'react'
import CompareItem from './compareItem/CompareItem';
import GenericCompare from './GenericCompare';

export default function RedeCompare({data, area}) {
    
    const redes = ['Privada', 'Municipal', 'Federal', 'Estadual'];

    let items = redes.map( rede => {
        
        let cursos = data.filter( c => {
            return c.instituicao.administracao === rede
                && c.conceitoEnade.faixa !== 0
        })

        let conceitos = cursos.map( c => c.conceitoEnade.faixa )

        return <CompareItem key={rede}
                    label={rede}
                    values={conceitos} />
    })

    return (
        <GenericCompare 
            title="Rede de Ensino" 
            area={area}
            items={items}
        />
    )
}
