import React from 'react'
import { Wrapper } from './styles'

export default function PopUp(props) {
  return (
    <Wrapper>
      <img onClick={props.close} src='https://media.discordapp.net/attachments/501196063613648900/824773502330077205/close.png' />
      <iframe src="https://www.youtube.com/embed/QTiaknioi9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Wrapper>
  )
}
