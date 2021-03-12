import React from 'react'
import { Room } from '@material-ui/icons'
import IconDivisor from '../../iconDivisor/IconDivisor'

export default function LocalDivisor({active}) {
    return (
        <IconDivisor label="Local" icon={Room} active={active}  />
    )
}
