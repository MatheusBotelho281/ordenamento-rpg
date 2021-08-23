import React from 'react'
import { useState } from 'react'
import { Menu, Wrapper, Titulo } from "./styles"

export default function HeaderSpecial() {

    const [menu, setMenu] = useState('./menu.png')
    const [sideMenu, setSideMenu] = useState(false)
    const [position, setPosition] = useState('10px')

    return (
        <>
            <div>
                <div style={{ position: 'absolute' }}>
                    <Menu src={menu}></Menu>
                </div>
            </div>
            <Wrapper>
                <Titulo>
                    Despertar do Campeão Gélido
                </Titulo>
                <div className="MenuLateral">

                </div>
            </Wrapper>
        </>
    )
}
