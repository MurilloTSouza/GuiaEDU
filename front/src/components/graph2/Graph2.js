import { Typography } from '@material-ui/core';
import React from 'react';
import Row from './Row';

const styles = {
    graph: {
        padding: '20px',
        display: 'inline-block',
        boxSizing: 'border-box'
    },
    title: {
        textAlign: 'center',
        padding: '4px 8px',
        backgroundColor: '#212121',
        margin: '18px 0',
        borderRadius: '40px',
        fontWeight: 'bold',
        color: 'white'
    }
}

export default function Graph2({title, data, options, getValue, enade, cpc}) {

    // hsl color
    let h, s, l;
    if(enade){ h=42; s=100; l=50;}
    else if(cpc){ h=340; s=82; l=52; }

    let getConceito;
    if(enade){ getConceito = (c) => c.conceitoEnade.faixa }
    else if(cpc){ getConceito = (c) => c.conceitoCurso.faixa }


    let items = [];    
    options.map( opt => {
        let cursos = data.filter( c => {
            return (getValue(c) === opt)
                && (getConceito(c) !== 0)
        })
        let conceitos = cursos.map( c => getConceito(c) )

        let color = "hsl("+h+", "+s+"%, "+l+"%)"
        items.push( <Row label={opt} values={conceitos} color={color} key={opt}/> )
        h -= 6;
        return 0;
    })

    return (
        <div style={styles.graph}>
            <Typography style={styles.title}>{title}</Typography>
            {items}
        </div>
    )
}
