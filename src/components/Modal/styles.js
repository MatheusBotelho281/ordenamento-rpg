import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
width: 760px;
align-items: center;
justify-content: center;
height: auto;
p{
  font-family: 'Cinzel', serif;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
}
.botao{
  border: none;
  border-bottom: 1px solid transparent;
  font-size: 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0,2s;
  :hover{
    border-bottom: 1px solid white;
  }
}
img{
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid black;
  height: 75%;
}
`

export const InnerWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
.textos{
  width: 545px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

`