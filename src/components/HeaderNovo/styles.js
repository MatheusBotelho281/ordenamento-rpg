import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 0;
width:100%;
border: 1px solid transparent;
border-bottom: 1px solid white;
box-shadow: 3px 5px 10px black;
z-index: 99;
.btn-success{
    background-color: transparent;
    border-color: transparent;
}
.mb-2{
    margin: 0 35px;
    z-index: 99;
    background-color: transparent;
}
.btn-secondary{
    background-color: transparent;
    border-color: transparent;
}
@media only screen and (max-width: 1400px){
    display: none;   
}
`

export const WrapperMobile = styled.div`
display: none;
justify-content: space-between;
align-items: center;
padding: 20px 0;
width:100%;
border: 1px solid transparent;
border-bottom: 1px solid white;
box-shadow: 3px 5px 10px black;
z-index: 9;
transition: all 0.5s;
.btn-success{
    background-color: transparent;
    border-color: transparent;
}
.mb-2{
    margin: 0 35px;
    z-index: 99;
    background-color: transparent;
}
.btn-secondary{
    background-color: transparent;
    border-color: transparent;
}
@media only screen and (max-width: 1400px){
    display: flex;
}
.mobile-menu{
    display: flex;
    justify-content: center;
    transition: all 0.5s;
    left: ${props => props.menu};
    color: red;
    flex-direction: column;
    height: 100%;
    width: 50%;
    background-color: #191919!important;
    @media only screen and (max-width: 768px){
        width: 80%;
    }
}
.dropdown-menu{
    z-index: 99!important;
}
.dropdown{
    margin-bottom: 15px;
}
.mb-2{
    width: 150px;
}
buttom{
    width: 65px;
    height: 65px;
    background-color: #252525;
    color: white;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    display: flex;
    position: absolute;
    top: 45px;
    right: 15px;
    img{
        width: 30px;
    }
}
`

export const Divisoria = styled.div`
display: flex;
justify-content: space-evenly;

`
export const Logo = styled.img`
width: auto;
transition: all 0.3s;
:hover{
    transform: scale(1.02);
}
`

export const Opcao = styled.p`
color: white;
font-size: 16px;
margin: 7px 35px;
cursor: pointer;
font-family: 'Nunito', sans-serif;
transition: all 0.5s;
border: solid 2px transparent;
`