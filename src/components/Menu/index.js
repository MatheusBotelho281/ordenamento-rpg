import React from 'react'
import Botao from '../Botoes'
import { Wrapper } from './styles'
import { useState } from 'react'



export default function Menu(props) {

  const [cor, setCor] = useState('#8c041c')
  
  return (
    <Wrapper left={props.esquerda}>
      <a href='/arquivos'><Botao color={cor} NomeBotao='Arquivos' /></a>
      <a href='/personagens'><Botao color={cor} NomeBotao='Personagens' /></a>
      <Botao color={cor} NomeBotao='A Guerra' />
      <Botao color={cor} NomeBotao='Sabedoria' />
      <Botao color={cor} NomeBotao='Panteão' />
      <a href='/login'><Botao color={cor} NomeBotao='WIP' /></a>
    </Wrapper>
  )
}
