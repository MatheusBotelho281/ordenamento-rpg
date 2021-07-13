import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

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
.iframeDisc{
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
.Pop{
  width:1366px;
  height: 768px;
  position: fixed;
  z-index: 999999;
  transition: all 0.2s;
  @media only screen and (max-width: 1500px){
     width:1200px;
     height: 600px;
    }
    @media only screen and (max-width: 1200px){
     width:1000px;
     height: 500px;
    }
    @media only screen and (max-width: 1000px){
     width:800px;
     height: 600px;
    }
    @media only screen and (max-width: 800px){
     width:630px;
     height: 300px;
    }
    @media only screen and (max-width: 600px){
     width:300px;
     height: 200px;
    }
}
.PopDiv{
  transition: all 0.2s;
  width: 100%;
  left: 0;
  top: 0;
  height:100%;
  align-items: center;
  position: fixed;
  justify-content: center;
  display: flex;
  background-color: rgba(0,0,0,0.6);
  z-index: 99999;
  img{
    cursor: pointer;
    position: fixed;
    right: 100px;
    top: 100px;
    width: 32px;
    @media only screen and (max-width: 1600px){
      right: 25px;
      top: 55px;
    }
  }
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

export default function TheWitcher() {

  const [PopUp, setPopUp] = useState(false)

  function PopUpShow() {
    setPopUp(true)
  }
  function PopUpGo() {
    setPopUp(false)
  }

  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <Título>
            Contrata-se um bruxo | <span style={{ fontSize: "23px" }}>13/07/2021</span>
          </Título>
          <Texto>
            "Bruxos se tornaram raros, os poucos que ainda andam por essas terras são conhecidos pelo povo, peço a algum desses que me auxilie em um trabalho.
            <br /> Para adiantar um pouco mais o contrato, o pagamento será de 20.000 coroas, um valor alto o suficiente para que qualquer um compre uma bela
            mansão e viva nela por longos anos com fartura. Porém existe um bom motivo atrelado ao valor, a quantidade de criaturas dentro de minha propriedade
            é muito maior do que qualquer um já tenha enfrentado, dois feiticeiros e um bruxo entraram no local e não voltaram, e isso já faz muito tempo, as
            criaturas podem ter se reproduzido por lá. <br /> O pagamento será feito integralmente para cada um que voltar vivo do trabalho. Enquanto ao local,
            é bem grande, com 32 hectares, 2 vilarejos onde meus serviçais trabalhavam antes da tragédia e minha casa, com muitos cômodos.
            <br /> Para mais detalhes e a assinatura formal do contrato me encontre na estalagem Djinn Manso."
          </Texto>
          <Imagem src="https://i.redd.it/wwabrcwi4i721.png" />
          <Texto>
            No One-Shot, os jogadores controlarão famosas personalidades do universo Witcher em um contrato grandioso, podendo levar várias sessões para
            desvendar o que tem causado o problema e resolver de uma vez por todas as complicações.
            <br /> Tudo começará no dia 31/07.
          </Texto>
          <buttom onClick={PopUpShow} style={{backgroundColor: "white", width: "500px",height: "70px", cursor: "pointer", alignItems: "center", display: "flex", justifyContent: "center", fontSize: "x-large", marginBottom: "30px"}}>Video pra dar uma animada</buttom>
          {PopUp && <div className="PopDiv" onClick={PopUpGo}><img src="./close.png" onClick={PopUpGo}></img><iframe className="Pop" width="1730" height="715" src="https://www.youtube.com/embed/0WQ9nqa4V1o" title="YouTube video player" frameborder="0" allowfullscreen /></div>}
        </InnerWrapper>
      </Wrapper>
    </>
  )
}
