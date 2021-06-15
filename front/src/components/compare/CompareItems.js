import React from 'react'
import { Container, Typography } from '@material-ui/core';
import Label from '../label/Label';

const styles = {
    wrapper: {
        height: '380px',
        padding: '32px 0',
        backgroundImage: 'linear-gradient(transparent 60%, white)'
    },
    items: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    title: {
        position: 'absolute',
        left: '0'
    },
    label: {
        position: 'absolute',
        right: '0'
    }
}
export default function CompareItems({title, subtitle, enade, cpc, children}) {

    let label;
    if(enade) label = <Label color="#ffb400">CONCEITO ENADE</Label>;
    if(cpc) label = <Label color="#e91e63">CONCEITO CURSO</Label>;

    return (
        <div style={styles.wrapper}>
            <Container maxWidth="md" style={{position: "relative"}}>

                <div style={styles.title}>
                    <Typography variant="h5" style={{fontWeight: 'bold'}}>{title}</Typography>
                    <Typography variant="caption">{subtitle}</Typography>
                </div>

                <div style={styles.label}>
                    {label}
                </div>

                <div style={{padding: '32px 0'}}>

                    <div style={styles.items}>
                        {children}
                    </div>

                </div>

            </Container>
        </div>
    )
}
