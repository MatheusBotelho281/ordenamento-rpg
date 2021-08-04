import React from 'react'
import { Logo, Wrapper, Titulo } from "./styles"

export default function HeaderSpecial() {
    return (
        <>
            <Wrapper>
                <div>
                    <a href="/">
                        <Logo src="./HUB.png"></Logo>
                    </a>
                </div>
                <Titulo>
                    Despertar do Campeão Gélido
                </Titulo>
            </Wrapper>
        </>
    )
}
