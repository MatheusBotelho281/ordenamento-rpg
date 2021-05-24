import styled from 'styled-components'

export const Wrapper = styled.div`
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
export const InnerWrapper = styled.div`
width: 45%;
display: flex;
align-items: start;
justify-content: center;
flex-direction: column;
`

export const Post = styled.div`
display: flex;
flex-direction: column;
font-family: "Nunito", sans-serif;
`

export const Texto = styled.p`
color: white;
font-family: "Nunito", sans-serif;
`

export const Título = styled.h3`
color: lightgray;
font-family: "Nunito", sans-serif;
`

export const Imagem = styled.img`
width: ${props => props.largura};
height: ${props => props.altura};
max-width: 620px;
max-height: 370px;
border: 1px solid white;
border-radius: 3px;
`