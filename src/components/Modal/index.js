import React from 'react'
import { InnerWrapper, Wrapper } from './styles'

export default function Modal(props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <div className='textos'>
          <img src={props.imagem} />
          <p className='botao'><a download href={props.download}>{props.opcao}</a></p>
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}
