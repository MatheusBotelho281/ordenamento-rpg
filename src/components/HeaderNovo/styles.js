import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 0;
width:100%;
border: 1px solid transparent;
border-bottom: 1px solid white;
box-shadow: 3px 5px 10px black;
`

export const Divisoria = styled.div`
display: flex;
justify-content: space-evenly;

`
export const Logo = styled.img`
width: auto;
cursor: pointer;
transition: all 0.3s;
:hover{
    transform: scale(1.02);
}
`

export const Opcao = styled.a`
color: white;
font-size: 17px;
margin: 0 35px;
cursor: pointer;
font-family: 'Nunito', sans-serif;
transition: all 0.5s;
border: solid 2px transparent;
:hover{
    border-bottom: solid 2px #d22026;
}
`