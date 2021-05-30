import React from 'react'
import styled from 'styled-components'
import {Wrapper, InnerWrapper , Post, Texto, Título, Imagem, Botao} from "../Styles/styles"

export default function BoasVindas() {

  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <Título>Bem Vindos ao HUB do RPG</Título>
          <Texto>
            Agora tudo, ou quase, sobre o RPG estará por aqui, informações, dados de sessões passadas e tudo o que
             o mestre achar útil para os jogadores. (Talvez algo inútil em algum post ou outro, mas sabe como é, acontece...)
          </Texto>
          <Texto>
            Todos os mestres estarão sempre listados nessa página inicial junto de seus RPGs atuais.
          </Texto>
          <Imagem src="./HUB.png"></Imagem>
          <Texto>
            Joguem com vontade e lembrem-se, "Se uma lança deve acertar, ela vai acertar."
          </Texto>
        </InnerWrapper>
      </Wrapper>
    </>
  )
}
