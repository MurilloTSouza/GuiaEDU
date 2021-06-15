import { Container, Typography } from '@material-ui/core';
import React from 'react'
import Graph2 from './Graph2';

const styles = {
    wrapper: {
        height: '380px',
        padding: '32px 0',
        backgroundImage: 'linear-gradient(transparent 60%, white)'
    },
    title: {
        position: 'absolute',
        left: '0'
    },
    content: {
        display: 'flex',
        direction: 'row',
        padding: '32px 0',
        justifyContent: 'space-evenly'
    }
}

export default function Slide({title, subtitle, data, options, getValue}) {

    return (
        <div style={styles.wrapper}>
            <Container maxWidth="md" style={{position: "relative"}}>

                <div style={styles.title}>
                    <Typography variant="h5" style={{fontWeight: 'bold'}}>{title}</Typography>
                    <Typography variant="caption">{subtitle}</Typography>
                </div>
                <div style={styles.content}>
                    <Graph2
                        title="Média do Conceito Enade"
                        data={data}
                        options={options}
                        getValue={getValue}
                        enade
                    />
                    <Graph2
                        title="Média do Conceito Curso"
                        data={data}
                        options={options}
                        getValue={getValue}
                        cpc
                    />
                </div>
                

            </Container>
        </div>
    )
}
