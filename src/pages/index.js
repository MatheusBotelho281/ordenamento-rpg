import Botao from '../components/Botoes'
import { ListaBotoes, TextoPadrao, DivOrg } from '../styles/styles.js'
import { useState } from 'react'
import React from 'react';
import styled from 'styled-components'
import Link from 'next/link'

const DivTr = styled.div`
height: 225px;
width: 100%;
position: relative;
`

const TextoTr = styled.h1`
left:0;
right:0;
font-family: 'Cinzel', serif;
font-size: 5rem;
color: #fff;
text-align: center;
position: absolute;
transition: all 0.5s;
cursor:default;
`

const MapaKhorInicio = styled.img`
padding: 45px;
max-width: 40%;
height: auto;
float: right;
`

const BotaoCampanha = styled.button`
font-size: larger;
padding: 3px;
color:rgb(32,32,32);
background-color: white;
border: 2px solid rgb(32, 32, 32);
width: 19rem;
height: 5rem;
cursor: not-allowed;
`

const LocalBotaoCam = styled.div`
display: flex;
align-items:center;
justify-content: center;
top: 0;
bottom: 10px;
`

export default function Home() {

  const [TituloTr, setTituloTr] = useState(false)

  function onHover() {
    setTituloTr(true)
  }

  function onLeave() {
    setTituloTr(false)
  }

  return (
    <div>
      <DivOrg>
        <DivTr onMouseOver={onHover} onMouseLeave={onLeave}>
          <TextoTr style={{ opacity: TituloTr ? '0' : '1' }}>O Ordenamento</TextoTr>
          <TextoTr style={{ opacity: TituloTr ? '1' : '0' }}>A Campanha dos 7</TextoTr>
        </DivTr>
      </DivOrg>
      <ListaBotoes>
        <Botao NomeBotao='Mundo' />
        <a href='/personagens'><Botao NomeBotao='Personagens' /></a>
        <Botao NomeBotao='A Guerra' />
        <Botao NomeBotao='Pós Guerra' />
        <Botao NomeBotao='Os 7' />
        <Botao NomeBotao='Panteão' />
      </ListaBotoes>
      <TextoPadrao>
        <p>
          ISSO MESMO VADIAS, A SEGUNDA CAMPANHA ESTÁ VINDO.
          </p>
        <p>
          HOJE COMEREMOS CUS... TALVEZ NÃO HOJE, MAS AGUARDEM, CAMBADA DE PROSTIRANHA!
          </p>
      </TextoPadrao>
      <MapaKhorInicio src='/Khorvaire_Map_Preview.jpg' />
      <div style={{position: 'relative', bottom: '-33rem'}}>
        <LocalBotaoCam>
          <BotaoCampanha>02/05/2021</BotaoCampanha>
        </LocalBotaoCam>
      </div>
    </div>
  )
}
