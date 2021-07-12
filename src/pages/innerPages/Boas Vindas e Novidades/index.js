import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 25px;
text-align: justify;
.discord{
    @media only screen and (max-width: 1400px){
      display: none;
    }
  }
ul{
  color: white;
  font-family: "Nunito", sans-serif;
  font-size: 17px;
}
iframe{
  position: absolute;
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
transition: all 0.4s;
@media only screen and (max-width: 1400px){
  width: 60%
}
@media only screen and (max-width: 768px){
  width: 95%
}
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
@media only screen and (max-width: 768px){
  width: 300px;
}
`

const Botao = styled.button`
width: 200px;
margin-bottom: 20px;
border: none;
background-color: darkred;
color: white;
font-size: 17px;
font-family: "Nunito", sans-serif;
`


export default function BoasVindas() {

  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <Título>Bem Vindos ao HUB do RPG | Botelho</Título>
          <Texto>
            Apenas um pequeno projeto para as mesas de RPG, aqui terão resumos de sessões, arquivos, personagens de cada aventura
            e as melhores frases 
          </Texto>
          <Texto>
            Por agora a área de Sabedoria está sendo contruida, ainda será necessário um tempo bom para arrumar todas as frases. 
            Caso queiram podem enviar todas as melhores frases que saem dos RPGs para mim.
          </Texto>
          <Imagem src="./HUB.png"></Imagem>
          <Texto>
            E lembrem-se, "Se uma lança deve acertar, ela vai acertar."
          </Texto>
        </InnerWrapper>
      </Wrapper>
    </>
  )
}
