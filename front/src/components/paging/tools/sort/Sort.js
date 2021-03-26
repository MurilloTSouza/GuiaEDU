import React from 'react'
import Selector from '../../../form/input/selector/Selector'

export default function Sort({value, options, onChange}) {

    const filterChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <div className="Sort">
            <Selector required
                name="sort"
                value={value}
                labelOpts={options}
                onChange={filterChange}
            />            
        </div>
    )
}
