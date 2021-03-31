import Botao from '../components/Botoes'
import { Time, ListaBotoes, TextoPadrao, DivOrg } from '../styles/styles.js'
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
width: 45%;
position: relative;
border: none;

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
  const [cor, setCor] = useState('#8c041c')
  const [nomeBotao, setNomeBotao] = useState('Fogo')

  function togglePopUp() {
    setVideoPopUp(true)
  }
  function onHover() {
    setTituloTr(true)
  }

  function onLeave() {
    setTituloTr(false)
  }
  function ChangeTeam() {
    if (cor == '#8c041c') {
      setCor('#084973')
      setNomeBotao('Gelo')
    } else {
      setCor('#8c041c')
      setNomeBotao('Fogo')
    }
  }

  return (
    <div>
      <Head>
        <title>O Ordenamento</title>
      </Head>
      {videoPopUp && <PopUp close={() => setVideoPopUp(false)} />}
      <div>
        <DivOrg>
          <buttom onClick={ChangeTeam} style={{backgroundColor: cor }} className='team'>{nomeBotao}</buttom>
          <DivTr onMouseOver={onHover} onMouseLeave={onLeave}>
            <TextoTr style={{ opacity: TituloTr ? '0' : '1' }}>O Ordenamento</TextoTr>
            <TextoTr style={{ opacity: TituloTr ? '1' : '0' }}>A Campanha dos 7</TextoTr>
          </DivTr>
        </DivOrg>
        <div style={{width: '100%', display: 'flex'}}>
          <ListaBotoes>
            <a href='/arquivos'><Botao color={cor} NomeBotao='Arquivos' /></a>
            <a href='/personagens'><Botao color={cor} NomeBotao='Personagens' /></a>
            <Botao color={cor} NomeBotao='A Guerra' />
            <Botao color={cor} NomeBotao='Sabedoria' />
            <Botao color={cor} NomeBotao='Panteão' />
            <a href='/login'><Botao color={cor} NomeBotao='WIP' /></a>
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
    </div>
  )
}
