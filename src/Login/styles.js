import styled from "styled-components";


export const Container =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Input = styled.input`
    padding: 10px;
    width: 350px;
    height: 40px;
    border: none;
    background: #ecf0f1;
    border-radius: none;
    margin: 5px;
`;

export const Button = styled.button`
    padding: 10px;
    font-family: 'Cinzel', sans-serif;
    width: 360px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background: ${props => props.primary ? "palevioletred" : "orange" };;
    color: #fff;
    margin: 10px;
    font-weight: bold;
`; 

export const Title = styled.p`
    font-weight: bold;
    color: #9b59b6;
    font-size: 22px;
`

export const HomeButtom = styled.h1`
font-family: 'Cinzel', sans-serif;
color: white;
cursor: pointer;
border: none;
border-bottom: 2px solid transparent;
transition: all 0.1s;
:hover{
    border-bottom: 2px solid white;
}
`