import React from 'react'
import { Domain } from '@material-ui/icons'
import IconDivisor from '../../iconDivisor/IconDivisor'

export default function IesDivisor({active}) {
    return (
        <IconDivisor label="Instituição" icon={Domain} active={active}  />
    )
}
