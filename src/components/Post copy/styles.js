import styled from 'styled-components'

export const Wrapper = styled.div`
width:90%;
color: white;
font-family: 'Cinzel', sans-serif;
display: flex;
flex-direction: column;
align-items:start;
padding-left: 10%;
@media only screen and (max-width: 1024px){
  padding-left: 0;
}
`

export const InnerWrapper = styled.div`
h1{
  font-size: 30px;
}
img{
  border: ${props => props.border};
  border-radius: 2px;
  width: 70%;
  @media only screen and (max-width: 1024px){
  width:100%;
}
}
`

export const DataPost = styled.div`
p{
  color: rgba(255,255,255,0.7);
  font-family: 'Cinzel', sans-serif;
}
display: flex;
align-items: center;
`

export const Separacao = styled.div`
height: 20px;
margin: 0 10px;
width: 2px;
background-color: rgba(255,255,255,0.7)
`

export const Conteudo = styled.p`
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
color: white;
width: 70%;
@media only screen and (max-width: 1024px){
  width:100%;
}
`