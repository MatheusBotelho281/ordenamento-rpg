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
z-index: 99;
.btn-success{
    background-color: transparent;
    border-color: transparent;
}
.mb-2{
    margin: 0 35px;
    z-index: 99;
    background-color: transparent;
}
.btn-secondary{
    background-color: transparent;
    border-color: transparent;
}
`

export const Divisoria = styled.div`
display: flex;
justify-content: space-evenly;

`
export const Logo = styled.img`
width: auto;
transition: all 0.3s;
:hover{
    transform: scale(1.02);
}
`

export const Opcao = styled.p`
color: white;
font-size: 16px;
margin: 7px 35px;
cursor: pointer;
font-family: 'Nunito', sans-serif;
transition: all 0.5s;
border: solid 2px transparent;
`