import React from 'react'
import styled from 'styled-components'
import {Wrapper, InnerWrapper , Post, Texto, Título, Imagem, Botao} from "./styles"

export default function TheWitcher() {

  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <Título>
            História quase pronta. | <span style={{ fontSize: "23px" }}>29/05/2021</span>
          </Título>
          <Texto>
            Poucos detalhes faltando para finalizar toda a história para o segundo arco, <span style={{ fontWeight: "700", color: "lightblue" }}>A Caçada Selvagem</span>.
          </Texto>
          <Texto>
            O sistema usado será o The Witcher 1.9, assim que o balanceamento estiver finalizado ficará disponível junto da ficha na área de Arquivos. Para os bruxos,
            a lista de poções não sofrerá tantas modificações, o Bestiário será atualizado aos poucos, muito para manter uma dinâmica de aprendizado para os bruxos dentro do jogo.
          </Texto>
          <Texto>
            Muito mudou desde os acontecimentos da Era do Renascer, onde o panteão foi alterado e as linhas temporais estabilizadas. Mas existem males obscuros, escondidos
            da visão de todos apenas aguardando o momento para agir. Muitos tem visto a Caçada Selvagem cortar os céus, buscam algo sem tirarem tempo para descansar,
            creem que trazem o fim de tudo, o <span style={{ color: "red" }}>Ragnarok</span>.
          </Texto>
          <Texto>
            Alguns feiticeiros têm estudado uma anomalia mágica nas Ilhas Okami, ocorreram a pouco mais de 6 meses, alguns têm tentado contatar a escola de bruxos
            no local, sem sucesso retornam ao velho estilo, viagens longas e perigosas até as Ilhas. Cartas viajam rapidamente entre as pequenas vilas de Okami, não querem
            tantos feiticeiros, eles trazem problemas quando estão buscando algo. Contratos para bruxos quebrarem feitiços tem aparecido cada vez mais em meio
            às cartas da Escola do Dragão.
          </Texto>
          <Imagem src="./escolaDragao.jpeg" loading="lazy" alt="Escola do Dragão"/>
          <Texto>
            Kaedwen tem movimentado soldados, o clima de guerra se torna cada vez mais tenso, a décadas ninguém tentava invadir o país, mas Radovid V da Redania
            tem se provado sendo um louco, mas excelente estrategista. Todos os reinos estão em um clima desagradavel, e muitos dos feiticeiros tem
            saído em busca de respostas sobre a estranha leitura mágica em Okami. 
          </Texto>
        </InnerWrapper>
      </Wrapper>
    </>
  )
}
