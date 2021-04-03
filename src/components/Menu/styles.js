import styled from 'styled-components'

export const Wrapper = styled.div`
height: 100%;
width: 50%;
background-color: #0d0d0d;
z-index: 10;
position: fixed;
border: none;
left: ${props => props.left};
border-right: 2px solid white;
color: white;
transition: all 0.8s;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
@media only screen and (max-width: 620px){
  width: 100%;
}
`
