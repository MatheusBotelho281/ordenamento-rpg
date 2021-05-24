import Head from 'next/head'
import React from 'react'
import HeaderNew from '../components/HeaderNovo'
import { ToTop, Wrapper } from '../styles/home'
import Ordenamento1 from './innerPages/Ordenamento1.0'
import { useState } from 'react'



export default function novaHome() {

    const [PaginaMostrando, setPaginaMostrando] = useState("vazio")
    const [Ordenamento, setOrdenamento] = useState(false)
    return (
        <>
        <Head><title>Hub do RPG</title></Head>
            <Wrapper>
                <HeaderNew 
                Ordenamento={()=> setOrdenamento(true)}
                ></HeaderNew>
                <ToTop href="#">
                </ToTop>
            </Wrapper>
            {Ordenamento && <Ordenamento1 />}
        </>
    )
}
