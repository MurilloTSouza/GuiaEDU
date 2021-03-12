import React from 'react'

import './Card.css'

export default function Card({header, body}) {
    return (
        <div className="Card">
            <div className="header">
                {header}
            </div>
            <div className="body">
                {body}
            </div>
        </div>
    )
}
