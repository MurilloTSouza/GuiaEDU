import React, { Component } from 'react'
import CompareItem from '../../components/compare/compareItem/CompareItem';

import './CompararPage.css'

export default class CompararPage extends Component {
    
    render() {

        const mockValues = [1,1,1,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,5,5];

        return (
            <div className="CompararPage">
                <CompareItem values={mockValues} label="testando"/>
            </div>
        )
    }
}

