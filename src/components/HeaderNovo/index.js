import React from 'react'
import { Wrapper, Logo, Opcao, Divisoria } from './styles'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import SplitButton from 'react-bootstrap/SplitButton'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HeaderNew(props) {
    return (
        <>

            <Wrapper>
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
                                <Dropdown.Item eventKey="3">F.U.D.E.U.</Dropdown.Item>
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
                                <Dropdown.Item eventKey="1">The Witcher</Dropdown.Item>
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
                                <Dropdown.Item eventKey="1">Fichas</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Livros Jogador</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Livros Mestre</Dropdown.Item>
                                <Dropdown.Item eventKey="4">Todos os Livros</Dropdown.Item>
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
        </>
    )
}
