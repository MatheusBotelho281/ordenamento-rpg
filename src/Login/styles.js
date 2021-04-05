import styled from "styled-components";


export const Container =  styled.div`
height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url('./porta.png');
    background-repeat: no-repeat;
    background-size: 600px 800px;
    background-position: center;
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
    background: ${props => props.primary ? "#8c041c" : "#8c041c" };;
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

export const ErrorMessage = styled.p`
font-family: 'Cinzel', sans-serif;
color: red;
text-shadow: 1px 0px #ff4747;
`