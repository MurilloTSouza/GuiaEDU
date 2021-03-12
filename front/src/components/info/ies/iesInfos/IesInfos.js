import React from 'react'
import { Email, Language, Phone, Room, School } from '@material-ui/icons'
import IconInfo from '../../IconInfo'

export default function IesInfos({ies}) {

    const format = (items, join) => { return items.filter(Boolean).join(join); }

    // address
    const {endereco, numero, complemento, bairro, cep, municipio, estado} = ies.endereco;
    let formatted_address = format([endereco, numero, complemento, bairro, cep, municipio, estado], ' - ');
    const address = <IconInfo icon={Room} info={formatted_address} />;

    // detail
    const {organizacao, rede, administracao} = ies;
    const formatted_detail = format([organizacao, rede, administracao], ' - ');
    const detail = <IconInfo icon={School} info={formatted_detail} />;

    // phone
    const phone = ies.telefones
        ? <IconInfo icon={Phone} info={ies.telefones.join(' / ')} />
        : null;

    // email
    const email = ies.emails
        ? <IconInfo icon={Email} info={ies.emails.join(' / ')} />
        : null;

    // site
    const site = ies.site
        ? <IconInfo icon={Language} info={ies.site} link />
        : null;

    return (
        <>
            {address}
            {detail}
            {phone}
            {email}
            {site}
        </>
    )
}
