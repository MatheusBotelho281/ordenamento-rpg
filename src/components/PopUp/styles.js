import styled from 'styled-components'

export const Wrapper = styled.div`
background-color: rgba(0,0,0,0.4);
width: 100%;
height: 100%;
position: fixed;
display: flex;
align-items: center;
justify-content: center;
z-index: 9999;
img{
  width: 30px;
  position: absolute;
  top: 5%;
  right: 5%;
  cursor: pointer;
}
iframe{
  width: 1280px;
  height: 720px;
}
`