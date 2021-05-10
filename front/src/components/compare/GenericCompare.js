import React from 'react'
import { Container, Typography } from '@material-ui/core';

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
export default function GenericCompare({title, area, items}) {

    const subtitle = area === ''
        ? 'Todas as áreas'
        : area;

    return (
        <div style={styles.wrapper}>
            <Container maxWidth="md">

                <Typography variant="h5" style={styles.title}>
                    {title}
                </Typography>
                <Typography variant="body2">
                    ({subtitle})
                </Typography>

                <div style={styles.items}>
                    {items}
                </div>

            </Container>
        </div>
    )
}
