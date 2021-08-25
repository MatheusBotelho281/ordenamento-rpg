import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items:center;
justify-content: center;
width: 100%;
background-color: #1B1A23;
h2{
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    @media only screen and (max-width: 635px){
        font-size: medium;
    } 
}
img{
    height:50px;
    width: 50px;
    margin: 0 10px 0 0;
    cursor: pointer;
    @media only screen and (max-width: 635px){
        width: 30px;
        height: 30px;
    }
}
`

export const InnerWrapper = styled.div`
width: 70%;
display: flex;
align-items: center;
justify-content: space-between;
div{
    display: flex;
    align-items: center;
}
.option-menu-header{
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    font-size: medium;
    font-weight: 400;
    color: white;
    margin: 0 20px 0 0;
    cursor: pointer;
    transition: all 0.3s;
    :hover{
        color: #c52549;
    }
}
.hide{
    @media only screen and (max-width: 1250px){
        display: none;
    }
}
@media only screen and (max-width: 635px){
        width:100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
