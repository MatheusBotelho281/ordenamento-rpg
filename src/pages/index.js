import Head from 'next/head'
import React from 'react'
import HeaderNew from '../components/HeaderNovo'
import { ToTop, Wrapper } from '../styles/home'
import Ordenamento1 from './innerPages/Ordenamento1.0'
import { useState } from 'react'
import BoasVindas from './innerPages/Boas Vindas e Novidades'
import Despertar from './innerPages/Despertar'
import TheWitcher from './innerPages/The Witcher'



export default function novaHome() {

    const [PaginaMostrando, setPaginaMostrando] = useState("vazio")
    const [Ordenamento, setOrdenamento] = useState(false)
    const [Witcher, setWitcher] = useState(false)
    const [Campeao, setCampeao] = useState(false)
    const [Novidades, setNovidades] = useState(true)

    function OrdenamentoOn(){
        setNovidades(false)
        setCampeao(false)
        setWitcher(false)
        setOrdenamento(true)
    }
    function CampeaoOn(){
        setNovidades(false)
        setCampeao(true)
        setWitcher(false)
        setOrdenamento(false)
    }
    function WitcherOn(){
        setNovidades(false)
        setCampeao(false)
        setWitcher(true)
        setOrdenamento(false)
    }
    return (
        <>
        <Head><title>Hub do RPG</title></Head>
            <Wrapper>
                <HeaderNew 
                Ordenamento={OrdenamentoOn}
                Despertar={CampeaoOn}
                WitcheRPG={WitcherOn}
                ></HeaderNew>
                <ToTop href="#">
                </ToTop>
            </Wrapper>
            {Novidades && <BoasVindas />}
            {Ordenamento && <Ordenamento1 />}
            {Campeao && <Despertar />}
            {Witcher && <TheWitcher />}
        </>
    )
}
