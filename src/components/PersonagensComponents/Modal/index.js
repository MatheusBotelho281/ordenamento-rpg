import React from 'react'
import { InnerWrapper, Wrapper } from './styles'

export default function Modal(props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <div className='textos'>
          <p style={{ fontSize: '1.5rem' }}>{props.nomePersonagem}</p>
          <p>{props.historia}</p>
          <p>{props.destino}</p>
          <p>Player: {props.jogador}</p>
        </div>
        <div className='imagem'>
          <img src={props.imagem} />
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}
