import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
.voltar{
  padding: 5px;
  font-family: 'Cinzel', serif;
  font-size: 1.5rem;
  color: #fff;
  position: absolute;
  top: 10%;
  right: 88.5%;
  transition: all 0.1s;
  cursor: pointer;
  :hover{
    border-bottom: #8c041c 1px solid;
  }
}
h1{
  font-family: 'Cinzel', serif;
  font-size: 5rem;
  color: #fff;
}
li{
  font-family: 'Cinzel', serif;
  font-size: 1rem;
  padding-bottom: 5px;
  color: #fff;
  cursor: pointer;
  transition: all 0.5s;
  :hover{
    opacity: 0.4;
  }
}
.menuButtom{
  position: absolute;
  width: 40px;
  top: 5%;
  left: 5%;
  z-index: 100;
}
`

export const InnerWrapper = styled.div`
display: flex;
height: auto;
flex-direction: row;
align-items: center;
justify-content: center;
ul{}
`

export const Menu = styled.div`
position: absolute;
left: ${props => props.left};
top: 0;
width: 500px;
z-index: 99;
height: 100vh;
overflow: hidden;
background-color: gray;
transition: all 1s;
`