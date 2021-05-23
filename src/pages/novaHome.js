import React from 'react'
import HeaderNew from '../components/HeaderNovo'
import { ToTop, Wrapper } from '../styles/home'
import Ordenamento1 from './innerPages/Ordenamento1.0'



export default function novaHome() {
    return (
        <>
            <Wrapper>
                <HeaderNew></HeaderNew>
                <ToTop href="#">
                </ToTop>
            </Wrapper>
            <Ordenamento1 />
        </>
    )
}
