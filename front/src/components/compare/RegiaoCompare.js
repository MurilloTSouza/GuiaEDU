import { Container, Typography } from '@material-ui/core';
import React from 'react'
import CompareItem from './compareItem/CompareItem';
import GenericCompare from './GenericCompare';

const styles = {
    wrapper: {
        padding: '32px 0',
        backgroundImage: 'linear-gradient(transparent 60%, white)'
    },
    title: {
        fontWeight: 'bold',
    },
    items: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
}

export default function RegiaoCompare({data, area}) {

    const regioes = ['Norte', 'Nordeste', 'Centro Oeste', 'Sudeste', 'Sul'];

    let items = regioes.map( regiao => {
        
        let cursos = data.filter( c => {
            return c.instituicao.endereco.regiao === regiao
                && c.conceitoEnade.faixa !== 0
        })

        let conceitos = cursos.map( c => c.conceitoEnade.faixa )

        return <CompareItem key={regiao}
                    label={regiao}
                    values={conceitos} />
    })

    return (
        <GenericCompare 
            title="Região" 
            area={area}
            items={items}
        />
    )
}
