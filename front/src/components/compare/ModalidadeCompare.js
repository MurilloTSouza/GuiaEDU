import React from 'react'
import CompareItem from './compareItem/CompareItem';
import GenericCompare from './GenericCompare';

export default function ModalidadeCompare({data, area}) {
    
    const modalidades = ['A Distância', 'Presencial'];

    let items = modalidades.map( modalidade => {
        
        let cursos = data.filter( c => {
            return c.modalidade === modalidade
                && c.conceitoEnade.faixa !== 0
        })

        let conceitos = cursos.map( c => c.conceitoEnade.faixa )

        return <CompareItem key={modalidade}
                    label={modalidade}
                    values={conceitos} />
    })

    console.log(data)

    return (
        <GenericCompare 
            title="Modalidade de Ensino" 
            area={area}
            items={items}
        />
    )
}