import styled from 'styled-components'

export const Wrapper = styled.div`
width: 100%;
height: 85vh;
img{
    width: 100%;
}
@media only screen and (max-width: 1200px){
    height: 75vh;
}
@media only screen and (max-width: 900px){
    height: 65vh;
}
@media only screen and (max-width: 600px){
    height: 50vh;
}
`

export const ImgDestaque = styled.div`
background-image: url("./destaquelichking.png");
background-size: cover;
background-position: center center;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
h5{
    text-transform: uppercase;
    color: #c52549;
    margin: 0 0 -60px 0;
    padding: none;
    font-weight: 600;
    font-family: 'Popins', sans-serif;
    font-size: 15px;
}
h2{
    text-transform: uppercase;
    text-align: start;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 70px;
    font-weight: 700;
}
p{
    margin: -20px 0 0 0;
    color: white;
    opacity: 0.6;
    font-family: 'Popins', sans-serif;
    font-size: large;
}
.inner-text{
    margin: 0 0 0 200px;
    padding: 0 0 0 0;
}
.vertical-column{
    position: absolute;
    height: 62px;
    width: 3px;
    border-radius: 10px;
    background-color: white;
}
.p-inner-text{
    margin: 0 0 0 20px;
}
`

export const DiscordButtom = styled.div`
width: ${props => props.direita};
display: flex;
position: absolute;
height: 100px;
background-color: #6757d6;
right: 0;
bottom: 100px;
overflow: hidden;
cursor: pointer;
transition: all 0.3s;
align-items: center;
justify-content: start;
img{
    width: 64px;
    height: 64px;
    margin: 0 0 0 10px;
}
p{
    color: white;
    opacity: 100%;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 0.9rem;
    transition: all 1s;
    margin-top: 0;
}
`