import { Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React from 'react'
import Decimal from '../../decimal/Decimal';
import Graph from '../../graph/Graph';

const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "120px",
        padding: "20px"
    },
    label: {
        width: "100%",
        borderRadius: "24px",
        backgroundColor: "#212121",
        color: "white"
    }
}

export default function CompareItem({values, label, pink}) {

    const sum = values.reduce((a, b) => a + b, 0);
    const average = (sum / values.length) || 0;
    const total = values.length;

    const color = pink ? "#e91e63" : "#ffb400" ;

    return (
        <div className="ComapreItem" style={styles.wrapper}>
            <Graph values={values} />

            <Typography style={styles.label}>{label}</Typography>

            <Decimal value={average}/>

            <Rating readOnly style={{color}}
                value={average} precision={0.1}/>
            
            <Typography variant="caption">Média de {total} cursos</Typography>
        </div>
    )
}
