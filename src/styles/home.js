import styled from 'styled-components' 

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export const ToTop = styled.a`
z-index: 99;
border: 1px solid white;
width: 40px;
height:40px;
cursor: pointer;
border-radius: 2px;
background-color: white;
position: fixed;
bottom: 20px;
right: 20px;
svg{
    color: black;
}
@media only screen and (max-width: 768px){
    display: none;
}
`
