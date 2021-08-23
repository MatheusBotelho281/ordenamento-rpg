import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items:center;
justify-content: space-evenly;
width: 100%;
.MenuLateral{
    position: absolute;
    left: 0;
    background-color: rgba(22,22,22);
    width: 500px;
    height: 100%;
    overflow: hidden;
}
`

export const Menu = styled.img`
width: 40px;
margin: 30px 0 30px 50px;
cursor: pointer;
`

export const Titulo = styled.p`
color: white;
font-family: 'Cinzel', serif;
font-size: 40px;
`