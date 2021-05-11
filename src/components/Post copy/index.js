import React from 'react'
import { DataPost, InnerWrapper, Wrapper, Separacao, Conteudo } from './styles'

export default function PostComLink(props) {
  return (
    <Wrapper>
      <DataPost>
        {/* Formato: XX/XX/XX */}
        <p>{props.data}</p>
        <Separacao />
        <p>{props.mestre}</p>
      </DataPost>
      <InnerWrapper border={props.borda}>
        <h1>{props.titulo}</h1>
        <Conteudo>{props.conteudo}</Conteudo>
        <a target="_blank" href={props.link}><Conteudo style={{backgroundColor: 'darkred', textAlign: "center", border:"solid 1px transparent", borderRadius:"2px"}}>{props.nomeTagA}</Conteudo></a>
        <img src={props.imagem} />
        <Conteudo>{props.conteudo1}</Conteudo>
        <img style={{border: "none"}} src={props.DEIXARVAZIO} />
      </InnerWrapper>
    </Wrapper>
  )
}
