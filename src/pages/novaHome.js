import React from 'react'
import HeaderNew from '../components/HeaderNovo'
import { ToTop, Wrapper } from '../styles/home'



export default function novaHome() {
    return (
        <>
            <Wrapper>
                <HeaderNew></HeaderNew>
                <ToTop href="#">
                </ToTop>

            </Wrapper>
        </>
    )
}
