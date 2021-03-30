import styled from "styled-components";


export const Container =  styled.div`
height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Input = styled.input`
    padding: 10px;
    width: 360px;
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
    border-radius: none;
    cursor: pointer;
    background: ${props => props.primary ? "darkred" : "darkred" };;
    color: #fff;
    margin: 5px;
    font-weight: bold;
`; 

export const Title = styled.p`
    font-weight: bold;
    font-family: 'Cinzel', sans-serif;
    color: white;
    font-size: 22px;
`

export const HomeButtom = styled.h2`
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