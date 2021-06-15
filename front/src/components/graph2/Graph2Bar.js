import React from 'react'
import { Typography } from '@material-ui/core'

const styles = {
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    backBar: {
        display: 'flex',
        width: '100%',
        height: '24px',
        backgroundColor: 'rgba(0,0,0,0.06)',
        marginRight: '28px', //extra space to quant label when 100% (24px size + 4px margin)
    },
    bar: {
        transition: 'width 1s'
    },
    valuePlace: {
        width: '0',         // only a div to have a place in the final flow
        overflow: 'visible', // it will not have any width
        position: 'relative'
    },
    value: {
        width: '24px',
        position: 'relative',
        left: '4px'
    }

}

export default function Graph2Bar({values, color}) {

    const max = 5;
    const quant = values.length;
    const sum = values.reduce((a, b) => a + b, 0);
    let avg = Math.floor((sum/quant)*100)/100;
    let percentage =  Math.floor((avg/max)*100);

    console.log(quant, sum, avg, percentage)
    
    let text = quant > 1
        ? "("+quant+" cursos)"
        : "("+quant+" curso)";
    
    if(Number.isNaN(avg)){ avg = 0; }
    if(Number.isNaN(percentage)){ percentage = 0; }

    const barValue = {
        width: percentage+"%",
        transition: "width 1s",
        backgroundColor: color
    };

    return (
        <div style={{width: '250px'}}>
            <div style={styles.row}>

                <div style={styles.backBar}>
                    <div style={{...styles.bar, ...barValue}}/>

                    <div style={styles.valuePlace}>
                        <Typography style={styles.value}> {avg} </Typography>
                    </div>
                </div>

                
            </div>

            <Typography variant="caption">
                {text}
            </Typography>
        </div>
    )
}
