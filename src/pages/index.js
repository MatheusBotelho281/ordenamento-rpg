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
import Post from '../components/Post';

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
            <a href='/login'><Botao color={cor} NomeBotao='Table Project' /></a>
          </ListaBotoes>

          <TextoPadrao>
            {/* <Post
              data=""
              mestre=""
              titulo=""
              conteudo=""
              borda="white 3px solid CASO TENHA IMAGEM"
              imagem="Sempre 3840x2160"
              conteudo1=""
               />
               <div className="divisoria"></div> */}
                              <Post
              data="29/04/21"
              mestre="Botelho"
              titulo="O mal é liberto"
              conteudo="No final do dia algo peculiar acontece, uma força se liberta, surtos de magia acontecem
              por todo o mundo, aparentemente apenas feiticeiros foram afetados dessa vez, mas não se sabe
              se existem mais consequência para tal acontecimento."
              borda="white 3px solid"
              imagem="./olhonosceus.png"
              conteudo1="Keihas e Aster conseguiram ver o que foi causado pela liberação do poder. Os únicos que tem
              alguma ideia do que aconteceu são Aster e Beorth."
               />
               <Post
              data="29/04/21"
              mestre="Botelho"
              titulo="Um dia ''comum'' em uma cidade complexa"
              conteudo="Após algum tempo em busca de um passe para a biblioteca da universidade, Aster consegue
              acesso ao local com uma carta de recomendação da Palaestra. No mesmo local Keihas conseguiu
              ganhar um campeonato no meio dos paladinos de Fairhaven (Com muita bebida, é claro!)."
              borda="white 3px solid"
              imagem="./palaestra.png"
              conteudo1="Enquanto o grupo liderado por Beorth conseguia desvendar o misterioso bilhete de Molly,
              Gaia liderava Jade e Citra pela cidade para conhecer o local e conseguir alguma informação
              eventual (Conseguiram no máximo uma goblin que não fala nem a própria língua direito). Garfiel e Luggir 
              apenas andaram até o clericado local e aproveitaram o dia até o momento do discurso do rei."
               />
               <div className="divisoria"></div>
            <Post
              data="22/04/21"
              mestre="Botelho"
              titulo="A Campanha dos 7 avança"
              conteudo="Logo após se reunirem, o grupo, liderado por Beorth, começa a buscar respostas
              por Fairhaven, indo atrás da descriptigrafia da mensagem de Molly."
              borda="white 3px solid"
              imagem="./tiamat.png"
              conteudo1="Uma nova problematica surge, Tiamat está começando a reaparecer na história de maneira
              ativa, mostrando-se sem medo e com um objetivo, retornar ao mundo."
            />
            <div className="divisoria"></div>
            <Post
              data="22/04/21"
              mestre="Botelho"
              titulo="Atualização de Posts Concluída"
              conteudo="Para publicar algum post será necessário o acesso ao código do site, uma
            vez que não existe um sistema bom de publicações, e não existe a necessidade disso no 
            momento"
            />
            <div className="divisoria"></div>
            <Post
              data="22/04/21"
              mestre="Botelho"
              titulo="Início dos Posts no site"
              conteudo="Agora vão ter certas atualizações aqui, sempre que algo mudar nas
            sessões e for importante o suficiente, virá para o site."
              borda="white 3px solid"
              imagem="./Wallpaper Ordenamento 2.png" />
          </TextoPadrao>
        </div>
      </div>
    </div>
  )
}

