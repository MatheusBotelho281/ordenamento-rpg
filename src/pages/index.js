import Botao from '../components/Botoes'
import { ListaBotoes, TextoPadrao, DivOrg } from '../styles/styles.js'
import { useState } from 'react'
import React from 'react';
import styled, { withTheme } from 'styled-components'
import Link from 'next/link'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import PopUp from '../components/PopUp'
import Head from 'next/head'

const DivTr = styled.div`
height: 205px;
width: 100%;
position: relative;
border: none;
border-bottom: solid 2px white;
`

const TextoTr = styled.h1`
left:0;
right:0;
width: auto;
font-family: 'Cinzel', serif;
font-size: 5rem;
color: #fff;
text-align: center;
position: absolute;
transition: all 0.5s;
cursor:default;
filter: drop-shadow(20px 10px 4px #000000);
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

`

export default function Home() {

  const [TituloTr, setTituloTr] = useState(false)
  const [videoPopUp, setVideoPopUp] = useState(false)

  function togglePopUp() {
    setVideoPopUp(true)
  }
  function onHover() {
    setTituloTr(true)
  }

  function onLeave() {
    setTituloTr(false)
  }

  return (
    <div>
      <Head>
        <title>O Ordenamento</title>
      </Head>
      {videoPopUp && <PopUp close={() => setVideoPopUp(false)} />}
      <div>
        <DivOrg>
          <DivTr onMouseOver={onHover} onMouseLeave={onLeave}>
            <TextoTr style={{ opacity: TituloTr ? '0' : '1' }}>O Ordenamento</TextoTr>
            <TextoTr style={{ opacity: TituloTr ? '1' : '0' }}>A Campanha dos 7</TextoTr>
          </DivTr>
        </DivOrg>
        <ListaBotoes>
          <a href='/arquivos'><Botao NomeBotao='Arquivos' /></a>
          <a href='/personagens'><Botao NomeBotao='Personagens' /></a>
          <Botao NomeBotao='A Guerra' />
          <Botao NomeBotao='Sabedoria' />
          <Botao NomeBotao='Os 7' />
          <Botao NomeBotao='Panteão' />
        </ListaBotoes>
        <TextoPadrao>
          <p>
            Nesse momento, o andamento da escrita está em:
          </p>
          <Progress percent='65' status="success" strokeWidth={'3'} />
          <BotaoCampanha onClick={togglePopUp} style={{ marginTop: '14%' }}>Aguarde...</BotaoCampanha>
        </TextoPadrao>
      </div>
    </div>
  )
}
