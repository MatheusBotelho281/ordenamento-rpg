import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
width: 1100px;
align-items: center;
height: auto;
p{
  font-family: 'Cinzel', serif;
  color: #fff;
  font-size: 1rem;
}
`

export const InnerWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
padding-left: 15%;
.textos{
  width: 545px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
}
.imagem{
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    border: 5px solid black;
    height: 80%;
  }
}
`