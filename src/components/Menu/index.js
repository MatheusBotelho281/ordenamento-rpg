import React from 'react'
import Botao from '../Botoes'
import { Wrapper } from './styles'
import { useState } from 'react'



export default function Menu(props) {

  const [cor, setCor] = useState('#8c041c')
  
  return (
    <Wrapper left={props.esquerda}>
      <Botao color={cor} NomeBotao='Sabedoria' />
      <a href='/login'><Botao color={cor} NomeBotao='Table Project' /></a>
    </Wrapper>
  )
}
