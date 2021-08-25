import React from 'react'
import Destaque from '../components/Destaque'
import HeaderSpecial from '../components/Special Header'
import Head from 'next/head'
import { Bloqueio } from '../styles/styles'

export default function campeao() {
    return (
        <>
            <Head><title>Despertar</title></Head>
            <Bloqueio>
                <img src="./favicon.png" />
                <h1 style={{color: "white", textAlign: "center"}}>
                    Acesse apenas pelo computador, caso esteja com esta mensagem, mande mensagem no discord!<br />
                    Ainda em construção para o mobile, não tenho ideia de quando ficará pronto!
                </h1>
            </Bloqueio>
            <HeaderSpecial RPG="Despertas do Campeão Gélido (WIP)" />
            <Destaque />
        </>
    )
}
