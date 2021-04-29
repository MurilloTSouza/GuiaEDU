import React from 'react'
import GraphColumn from './column/GraphColumn'

const styles = {
    graph: {
        display: 'inline-flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: '200px'
    }
}

// values must be an array of numbers
export default function Graph({values}) {

    return (
        <div style={styles.graph}>
            <GraphColumn label={5} color="#70c69f"
                values={values} max={values.length} />
            <GraphColumn label={4} color="#acd382"
                values={values} max={values.length} />
            <GraphColumn label={3} color="#ffd638"
                values={values} max={values.length} />
            <GraphColumn label={2} color="#f8b031"
                values={values} max={values.length} />
            <GraphColumn label={1} color="#f78954"
                values={values} max={values.length} />
        </div>
    )
}
