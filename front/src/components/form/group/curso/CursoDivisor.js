import React from 'react'
import { School } from '@material-ui/icons'
import IconDivisor from '../../iconDivisor/IconDivisor';

export default function CursoDivisor({active}) {
    return (
        <IconDivisor label="Curso" icon={School} active={active}  />
    )
}
