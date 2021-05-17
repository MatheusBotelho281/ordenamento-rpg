import React from 'react'
import { Wrapper, Logo, Opcao, Divisoria } from './styles'

export default function HeaderNew() {
    return (
        <>
        
            <Wrapper>
                <Divisoria style={{ width: "380px", height: "120px" }}>
                    <Logo src="./HUB.png" />
                </Divisoria>
                <Divisoria style={{ display: "flex", flexDirection: "row" }}>
                    <Opcao>Mesas Atuais</Opcao>
                    <Opcao>Futuras Mesas</Opcao>
                    <Opcao>Sabedoria</Opcao>
                    <Opcao>Ficha Online (WIP)</Opcao>
                </Divisoria>
            </Wrapper>
        </>
    )
}
