import styled from 'styled-components'

export const BotaoGrande = styled.button`
font-size: larger;
margin-left: 32px;
margin-right: 32px;
font-family: 'Cinzel', serif;
color:white;
background-color: transparent;
border: none;
border-bottom: 2px solid transparent;
width: 11rem;
height: 3.6rem;
transition-duration: 0.2s;
cursor: pointer;
:hover{
  background-color: transparent;
  cursor: pointer;
  color: white;
  border-bottom: 2px solid ${props => props.color};
}

`