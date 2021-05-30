import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 25px;
text-align: justify;
.discord{
    @media only screen and (max-width: 1400px){
      display: none;
    }
  }
ul{
  color: white;
  font-family: "Nunito", sans-serif;
  font-size: 17px;
}
iframe{
  position: absolute;
  top: 250px;
  left: 55px;
  width: 300px;
  height: 600px;
  transition: all 1s;
  @media only screen and (max-width: 1560px){
    top: 230px;
    width: 285px;
    height: 480px;
  }
  @media only screen and (max-width: 1480px){
    top: 200px;
    width: 250px;
    height: 480px;
  }
}
`
const InnerWrapper = styled.div`
width: 45%;
display: flex;
align-items: start;
justify-content: center;
flex-direction: column;
transition: all 0.4s;
@media only screen and (max-width: 1400px){
  width: 60%
}
@media only screen and (max-width: 768px){
  width: 95%
}
`

const Post = styled.div`
display: flex;
flex-direction: column;
font-family: "Nunito", sans-serif;
`

const Texto = styled.p`
color: white;
font-size: 17px;
font-family: "Nunito", sans-serif;
`

const Título = styled.h3`
color: lightgray;
font-family: "Nunito", sans-serif;
`

const Imagem = styled.img`
width: ${props => props.largura};
height: ${props => props.altura};
max-width: 620px;
max-height: 370px;
border: 1px solid white;
border-radius: 3px;
margin-bottom: 20px;
@media only screen and (max-width: 768px){
  width: 300px;
}
`

const Botao = styled.button`
width: 200px;
margin-bottom: 20px;
border: none;
background-color: darkred;
color: white;
font-size: 17px;
font-family: "Nunito", sans-serif;
`

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
