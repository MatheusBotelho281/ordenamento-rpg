import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items:center;
justify-content: start;
`

export const Logo = styled.img`
width: 320px;
cursor: pointer;
margin: 10px 0 10px 50px;
transition: all 0.4s;
:hover{
    transform: scale(1.02);
}
`

export const Titulo = styled.p`
color: white;
position: absolute;
top:0;
right: 510px;
font-family: 'Cinzel', serif;
font-size: 50px;
`