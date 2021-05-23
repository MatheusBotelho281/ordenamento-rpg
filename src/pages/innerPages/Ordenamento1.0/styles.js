import styled from 'styled-components'

export const Wrapper = styled.div`
width: 45%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
iframe{
  position: fixed;
  top: 250px;
  right: 10px;
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

export const Post = styled.div`
display: flex;
flex-direction: column;
`

export const Texto = styled.p`
color: white;
`

export const Título = styled.h3`
color: lightgray;
`