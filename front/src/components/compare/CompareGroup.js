import React from 'react'
import ModalidadeCompare from './ModalidadeCompare'
import RedeCompare from './RedeCompare'
import RegiaoCompare from './RegiaoCompare'

export default function CompareGroup({data, area}) {

    return (
        <div>
            <RegiaoCompare data={data} area={area}/>
            <RedeCompare data={data} area={area}/>
            <ModalidadeCompare data={data} area={area}/>
        </div>
    )
}
