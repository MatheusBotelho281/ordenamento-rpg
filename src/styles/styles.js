import styled from 'styled-components'

export const ListaBotoes = styled.div`
padding-right: 10px;
border-right: 2px solid white;
box-shadow: 10px 5px 5px black;
padding-top: 25px;
padding-left: 0.5%;
width: 18%!important;
height: auto;
overflow: hidden;
align-items: center;
justify-content: start;
display: flex;
flex-direction: column;
@media only screen and (max-width: 1600px){
  width: 18%;
  padding-left: 1px;
}
@media only screen and (max-width: 1200px){
  display: none;
}
`
export const TextoPadrao = styled.div`
background-color: ${props => props.bgColor};
font-family: 'Cinzel', serif;
width: 100%;
display: flex;
align-items: center;
justify-items: center;
flex-direction: column;
color: #fff;
font-size: large;
float: left;
padding: 45px;
justify-items: left;
.barra{
  color: white!important;
}
.divisoria{
  width: 70%;
  height:1px;
  background-color: white;
  @media only screen and (max-width: 1024px){
    width: 100%;
  }
}
`
export const DivOrg = styled.div`
display: flex;
border-bottom: solid 2px white;
width: 100%;
justify-content: center;
align-items: center;
box-shadow: 250px 9px 8px black;
@media only screen and (max-width: 1600px){
  box-shadow: 5px 9px 8px black;
}
.botao{
  align-items: center;
  justify-content: center;
  display: flex;
}
.team{
  box-shadow: 5px 8px 10px black;
  position: absolute;
  left: 1.5%;
  width: 200px;
  height: 70px;
  color: white;
  display: flex;
  font-family: 'Cinzel', serif;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;

}
`

export const Icone = styled.img`
position: absolute;
width: 40px;
top: 5%;
left: 5%;
cursor: pointer;
z-index: 500;
display: none;
@media only screen and (max-width: 1200px){
  display: flex;
}
`

export const AnchorStart = styled.a`
transition: all 0.4s;
:hover{
  transform: translateY(3px);
}
`
