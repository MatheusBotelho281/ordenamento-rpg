import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
h1{
  font-family: 'Cinzel', serif;
  font-size: 5rem;
  color: #fff;
}
li{
  font-family: 'Cinzel', serif;
  font-size: 1rem;
  padding-bottom: 5px;
  color: #fff;
  cursor: pointer;
  transition: all 0.5s;
  :hover{
    opacity: 0.4;
  }
}
`

export const InnerWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`