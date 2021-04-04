import Botao from '../components/Botoes'
import { Time, ListaBotoes, TextoPadrao, DivOrg, Icone } from '../styles/styles.js'
import { useState } from 'react'
import React from 'react';
import styled, { withTheme } from 'styled-components'
import Link from 'next/link'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import PopUp from '../components/PopUp'
import Head from 'next/head'
import Menu from '../components/Menu';
import { Line, Circle } from 'rc-progress';

const DivTr = styled.div`
align-items: center;
justify-content: center;
display: flex;
height: 205px;
width: 65%;
position: relative;
border: none;
@media only screen and(max-width: 600px){
  width: 100%;
}
`

const TextoTr = styled.h1`
width: auto;
font-family: 'Cinzel', serif;
font-size: 5rem;
color: #fff;
text-align: center;
position: absolute;
transition: all 0.5s;
cursor:default;
filter: drop-shadow(20px 10px 4px #000000);
@media only screen and (max-width: 1600px){
  font-size: 75px;
}
@media only screen and (max-width: 1325px){
  font-size: 70px;
}
@media only screen and (max-width: 1240px){
  font-size: 65px;
}
@media only screen and (max-width: 1145px){
  font-size: 60px;
}
@media only screen and (max-width: 1055px){
  font-size: 55px;
}
@media only screen and (max-width: 480px){
  font-size: 40px;
}
`

const MapaKhorInicio = styled.img`
padding: 45px;
max-width: 40%;
height: auto;
float: right;
`

const BotaoCampanha = styled.button`
font-size: larger;
box-shadow: 5px 8px 10px black;
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
  const [cor1, setCor1] = useState('#250103')
  const [nomeBotao, setNomeBotao] = useState('Fogo')
  const [menu, setMenu] = useState('./menu.png')
  const [menuPosition, setMenuPosition] = useState('-100%')

  function toggleMenuIcon() {
    if (menu == './menu.png') {
      setMenu('./close.png')
      setMenuPosition('0')
    } else {
      setMenu('./menu.png')
      setMenuPosition('-100%')
    }
  }
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
      setCor1('#011226')
      setNomeBotao('Gelo')
    } else {
      setCor('#8c041c')
      setCor1('#250103')
      setNomeBotao('Fogo')
    }
  }

  return (
    <div>
      <Icone onClick={toggleMenuIcon} src={menu} />
      <Menu esquerda={menuPosition} />
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
        <div style={{ width: '100%', display: 'flex' }}>
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
            <Line percent="97" strokeWidth="1" strokeColor="#8c041c" />
            <p style={{ marginBottom: 'none', fontSize: '35px', fontWeight: '700' }}>97%</p>
            <BotaoCampanha
              // onClick={togglePopUp}
              style={{ marginTop: '14%' }}>Aguarde...</BotaoCampanha>
          </TextoPadrao>
        </div>
      </div>
    </div>
  )
}

