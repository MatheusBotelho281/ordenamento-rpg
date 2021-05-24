import React from 'react'
import { Título, Texto, Wrapper, InnerWrapper, Imagem } from '../styles'

export default function Ordenamento1() {
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <iframe src="https://discord.com/widget?id=517026316378308629&theme=dark" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          <Título>
            Botelho | 23/05/21
        </Título>
          <Texto>
            O site está sendo completamente reformado, novo estilo, novos menus e funcionalidades.<br/>
            <span style={{paddingBottom: "10px"}}></span>
            A partir de agora todas as mesas estarão aqui com as informações necessárias para os jogadores,
            com notícias e informações pertinentes.
        </Texto>
        <Imagem src="./HUB.png"></Imagem>
        </InnerWrapper>
      </Wrapper>
    </>
  )
}
