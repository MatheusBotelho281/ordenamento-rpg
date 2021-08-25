import React from 'react'
import { useState } from 'react'
import { InnerWrapper, Wrapper } from "./styles"

export default function HeaderSpecial(props) {

    const [menu, setMenu] = useState('./menu.png')
    const [sideMenu, setSideMenu] = useState(false)
    const [position, setPosition] = useState('10px')

    return (
        <>
            <Wrapper>
                <InnerWrapper>
                    <div>
                        <a href="/"><img src="./favicon.png" /></a>
                        <h2>
                            {props.RPG}
                        </h2>
                    </div>
                    <div className="hide">
                        <h3 className="option-menu-header">Última Sessão</h3>
                        <h3 className="option-menu-header">Personagens</h3>
                        <h3 className="option-menu-header">Sabedoria</h3>
                    </div>
                </InnerWrapper>
            </Wrapper>
        </>
    )
}
