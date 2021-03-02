import TituloSuperior from '../components/TituloSuperior'
import Botao from '../components/Botoes'
import { ListaBotoes, TextoPadrao, DivOrg } from './styles'
import { useState } from 'react'
import React from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
transition: all 0.35s;
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
transition-duration: 0.2s;
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
        <Botao NomeBotao='Personagens' />
        <Botao NomeBotao='A Guerra' />
        <Botao NomeBotao='Pós Guerra' />
        <Botao NomeBotao='Os 7' />
        <Botao NomeBotao='Panteão' />
      </ListaBotoes>
      <TextoPadrao>
        <p>
          Mestrado e criado originalmente em 2019 pelo grande mestre Handowsblack (Alex),
          O Ordenamento foi uma fonte de histórias incríveis e realmente únicos,
          algo que apenas um dos melhores mestres conseguiria criar.
          </p>
        <p>
          Talvez o fim de tudo tenha se dado de maneira estranha e complicada,
          mas a vida acaba nos surpreendendo todos os dias, algumas vezes, de
          maneiras bem estranhas...
          </p>
        <p>
          Mas tudo isso não se resume apenas a uma breve história. Não, o mundo
          que foi criado sempre foi algo especial para todos que participaram.
          Então, da melhor maneira possível, tentaremos trazer tudo de volta. Não,
          não ficará bom como era, principalmente pela falta de criatividade
          para criar um mundo que aparenta estar vivo.
          </p>
        <p>
          É isso que a <b>Campanha dos 7</b> se propõe, tentar trazer tudo de volta para
            mais uma aventura com memórias únicas.
          </p>
        <p>
          Esperamos cumprir com o idealizado.<br />
            Botelho e Pedro.
          </p>
      </TextoPadrao>
      <MapaKhorInicio src='/Khorvaire_Map_Preview.jpg' />
      <div style={{position: 'relative', bottom: '-33rem'}}>
        <LocalBotaoCam>
          <BotaoCampanha> 02/05/2021</BotaoCampanha>
        </LocalBotaoCam>
      </div>
    </div>
  )
}
