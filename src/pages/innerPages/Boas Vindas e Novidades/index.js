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
font-size: 17px;
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
margin-bottom: 20px;
`

export default function BoasVindas() {

  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <Título>Bem Vindos ao HUB do RPG</Título>
          <Texto>
            Agora tudo, ou quase, sobre o RPG estará por aqui, informações, dados de sessões passadas e tudo o que
             o mestre achar útil para os jogadores. (Talvez algo inútil em algum post ou outro, mas sabe como é, acontece...)
          </Texto>
          <Texto>
            Todos os mestres estarão sempre listados nessa página inicial junto de seus RPGs atuais.
          </Texto>
          <Imagem src="./HUB.png"></Imagem>
          <Texto>
            Joguem com vontade e lembrem-se, "Se uma lança deve acertar, ela vai acertar."
          </Texto>
        </InnerWrapper>
      </Wrapper>
    </>
  )
}
