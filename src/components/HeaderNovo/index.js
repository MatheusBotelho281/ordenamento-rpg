import React from 'react'
import { useState } from 'react'
import { Wrapper, Logo, Opcao, Divisoria, WrapperMobile } from './styles'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import SplitButton from 'react-bootstrap/SplitButton'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HeaderNew(props) {

    const [esquerda, setEsquerda] = useState("-1200px")
    const [menuImage, setMenuImage] = useState("./menu.png")

    function menuFunction() {
        if (esquerda == "-1200px") {
            setEsquerda("0")
        } else if (esquerda == "0") {
            setEsquerda("-1200px")
        }
        if (menuImage == "./menu.png") {
            setMenuImage("./close.png")
        } else if (menuImage == "./close.png") {
            setMenuImage("./menu.png")
        }
    }
    return (
        <>

            <Wrapper className="menuDesktop" >
                <Divisoria style={{ width: "380px", height: "120px" }}>
                    <Logo src="./HUB.png" />
                </Divisoria>
                <Divisoria style={{ display: "flex", flexDirection: "row" }}>
                    <div className="mb-2">
                        {['down'].map((direction) => (
                            <DropdownButton
                                as={ButtonGroup}
                                key={direction}
                                id={`dropdown-button-drop-${direction}`}
                                drop={direction}
                                variant="secondary"
                                title={` Mesas Atuais `}
                            >
                                <Dropdown.Item eventKey="1" onClick={props.Ordenamento}>Ordenamento</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Ordenamento Campanha dos 7</Dropdown.Item>
                                {/* <Dropdown.Item eventKey="3">F.U.D.E.U.</Dropdown.Item> */}
                            </DropdownButton>
                        ))}
                    </div>
                    <div className="mb-2">
                        {['down'].map((direction) => (
                            <DropdownButton
                                as={ButtonGroup}
                                key={direction}
                                id={`dropdown-button-drop-${direction}`}
                                drop={direction}
                                variant="secondary"
                                title={` Próximas Mesas `}
                            >
                                {/* <Dropdown.Item eventKey="1" onClick={props.WitcheRPG}>The Witcher</Dropdown.Item> */}
                                <Dropdown.Item eventKey="2" onClick={props.Despertar}>Despertar do Campeão Gélido</Dropdown.Item>
                            </DropdownButton>
                        ))}
                    </div>
                    <div className="mb-2">
                        {['down'].map((direction) => (
                            <DropdownButton
                                as={ButtonGroup}
                                key={direction}
                                id={`dropdown-button-drop-${direction}`}
                                drop={direction}
                                variant="secondary"
                                title={` Arquivos `}
                            >
                                <Dropdown.Item eventKey="1" href="https://drive.google.com/file/d/1K8NFFWCmD98E893fUzTBklKEg4lMbWCC/view?usp=sharing" target="_blank">Fichas D&D</Dropdown.Item>
                                <Dropdown.Item eventKey="2" href="https://drive.google.com/file/d/1uSV0-jSg1rLiyP93PxO9l9NkBeM9DHHH/view?usp=sharing" target="_blank">Livros Jogador D&D</Dropdown.Item>
                                <Dropdown.Item eventKey="3" href="https://drive.google.com/file/d/1t9rATqqmCsRp4yXewP4hVjYlngCzckm-/view?usp=sharing" target="_blank">Livros Mestre D&D</Dropdown.Item>
                                <Dropdown.Item eventKey="4" href="https://drive.google.com/file/d/19Gr0S62QeqZdWymRQx0nfZf8JG-eqory/view?usp=sharing" target="_blank">Todos os Livros D&D</Dropdown.Item>
                                {/* <Dropdown.Item eventKey="5" href="./Ficha Witcher 1.9.pdf" download>Ficha Witcher</Dropdown.Item> */}
                            </DropdownButton>
                        ))}
                    </div>
                    {/* <Opcao onClick={props.mesasA}>Mesas Atuais</Opcao>
                    <Opcao onClick={props.mesasF}>Futuras Mesas</Opcao>
                    <Opcao onClick={props.arquivos}>Arquivos</Opcao> */}
                    <div><Opcao onClick={props.sabedoria}>Sabedoria</Opcao></div>
                    <div><Opcao onClick={props.ficha}>Ficha Online (WIP)</Opcao></div>
                </Divisoria>
            </Wrapper>
            <WrapperMobile menu={esquerda} className="menuDesktop" >
                <Divisoria style={{ width: "280px", height: "120px" }}>
                    <Logo src="./HUB.png" />
                </Divisoria>
                <Divisoria className="mobile-menu" style={{ display: "flex", position: "fixed", top: '0', backgroundColor: "black" }}>
                    <Logo src="./HUB.png" style={{width: "150px", margin: "0 0 80px 70px"}} />
                    <div className="mb-2">
                        {['right'].map((direction) => (
                            <DropdownButton
                                as={ButtonGroup}
                                key={direction}
                                id={`dropdown-button-drop-${direction}`}
                                drop={direction}
                                variant="secondary"
                                title={` Mesas Atuais `}
                            >
                                <span onClick={menuFunction}><Dropdown.Item eventKey="1" onClick={props.Ordenamento}>Ordenamento</Dropdown.Item></span>
                                <span onClick={menuFunction}><Dropdown.Item eventKey="2">Ordenamento Campanha dos 7</Dropdown.Item></span>
                                {/* <span onClick={menuFunction}><Dropdown.Item eventKey="3">F.U.D.E.U.</Dropdown.Item></span> */}
                            </DropdownButton>
                        ))}
                    </div>
                    <div className="mb-2">
                        {['right'].map((direction) => (
                            <DropdownButton
                                as={ButtonGroup}
                                key={direction}
                                id={`dropdown-button-drop-${direction}`}
                                drop={direction}
                                variant="secondary"
                                title={` Próximas Mesas `}
                            >
                                {/* <span onClick={menuFunction}><Dropdown.Item eventKey="1" onClick={props.WitcheRPG}>The Witcher</Dropdown.Item></span> */}
                                <span onClick={menuFunction}><Dropdown.Item eventKey="2" onClick={props.Despertar}>Despertar</Dropdown.Item></span>
                            </DropdownButton>
                        ))}
                    </div>
                    <div className="mb-2">
                        {['right'].map((direction) => (
                            <DropdownButton
                                as={ButtonGroup}
                                key={direction}
                                id={`dropdown-button-drop-${direction}`}
                                drop={direction}
                                variant="secondary"
                                title={` Arquivos `}
                            >
                                <Dropdown.Item eventKey="1" href="https://drive.google.com/file/d/1K8NFFWCmD98E893fUzTBklKEg4lMbWCC/view?usp=sharing" target="_blank">Fichas D&D</Dropdown.Item>
                                <Dropdown.Item eventKey="2" href="https://drive.google.com/file/d/1uSV0-jSg1rLiyP93PxO9l9NkBeM9DHHH/view?usp=sharing" target="_blank">Livros Jogador D&D</Dropdown.Item>
                                <Dropdown.Item eventKey="3" href="https://drive.google.com/file/d/1t9rATqqmCsRp4yXewP4hVjYlngCzckm-/view?usp=sharing" target="_blank">Livros Mestre D&D</Dropdown.Item>
                                <Dropdown.Item eventKey="4" href="https://drive.google.com/file/d/19Gr0S62QeqZdWymRQx0nfZf8JG-eqory/view?usp=sharing" target="_blank">Todos os Livros D&D</Dropdown.Item>
                                {/* <Dropdown.Item eventKey="5" href="./Ficha Witcher 1.9.pdf" download>Ficha Witcher</Dropdown.Item> */}
                            </DropdownButton>
                        ))}
                    </div>
                    {/* <Opcao onClick={props.mesasA}>Mesas Atuais</Opcao>
                    <Opcao onClick={props.mesasF}>Futuras Mesas</Opcao>
                    <Opcao onClick={props.arquivos}>Arquivos</Opcao> */}
                    <div><Opcao onClick={props.sabedoria}>Sabedoria</Opcao></div>
                    <div><Opcao onClick={props.ficha}>Ficha Online (WIP)</Opcao></div>
                </Divisoria>
                <buttom onClick={menuFunction}>
                    <img src={menuImage} />
                </buttom>
            </WrapperMobile>
        </>
    )
}
