import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 25px;
iframe{
  position: fixed;
  top: 250px;
  left: 55px;
  width: 300px;
  height: 600px;
  transition: all 1s;
  @media only screen and (max-width: 1560px){
    top: 230px;
    width: 285px;
    height: 480px;
  }
  @media only screen and (max-width: 1480px){
    top: 200px;
    width: 250px;
    height: 480px;
  }
}
`
const InnerWrapper = styled.div`
width: 45%;
display: flex;
align-items: start;
justify-content: center;
flex-direction: column;
`

const Post = styled.div`
display: flex;
flex-direction: column;
font-family: "Nunito", sans-serif;
`

const Texto = styled.p`
color: white;
font-family: "Nunito", sans-serif;
`

const Título = styled.h3`
color: lightgray;
font-family: "Nunito", sans-serif;
`

const Imagem = styled.img`
width: ${props => props.largura};
height: ${props => props.altura};
max-width: 620px;
max-height: 370px;
border: 1px solid white;
border-radius: 3px;
`

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
