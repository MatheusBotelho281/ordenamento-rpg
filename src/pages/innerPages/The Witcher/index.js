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
            Guerras de Nilfgaard | <span style={{ fontSize: "23px" }}>06/06/2021</span>
          </Título>
          <Texto>
            Rumores de guerra se espalham pelo mundo assim como o fogo se espalha em palha. Nilfgaard começou a convocar novos
            guerreiros, os melhores de suas terras, aqueles que buscam mercenários perto das terras do Sul ficam dias sem resposta
            nenhuma. Cavalos também se tornaram raros, boa parte foi comprada pelo imperador, ferreiros e armeiros estão sem tempo
            para responder a requisições de pessoas simples, se mantendo ocupados apenas com encomendas dos nobres que governam
            as regiões do Império do Grande Sol.
          </Texto>
          <Texto>
            As fronteiras de Vicovaro estão se fechando aos poucos, qualquer morador do Norte é proibido de pôr os pés nas cidades
            do império, todas as atitudes das cidades e seus governantes apenas aumenta o risco de uma guerra, e uma com proporções
            enormes, especialistas afirmam que caso isso ocorra, não passaria de um avanço inútil contra os reinos do Norte, porque
            contam com a proteção diplomática de Cintra.
          </Texto>
          <Texto>
            Todos os países têm se preparado para ataques, alguns o fazem por questões meramente políticas, não querem deixar seus
            vizinhos se armarem quando estão despreparados para um combate. Teméria tem tido um grande trabalho enviando tropas de
            batedores para coletar informações, ataques de Nilfgaard já ocorreram anteriormente ao país, deixando-o frágil e com medo
            de outros ataques.
          </Texto>
          <div style={{ width: "100%", height: "2px", backgroundColor: "gray", margin: "30px 0" }} />
          <Título>
            História quase pronta. | <span style={{ fontSize: "23px" }}>29/05/2021</span>
          </Título>
          <Texto>
            Poucos detalhes faltando para finalizar toda a história para o segundo arco, <span style={{ fontWeight: "700", color: "lightblue" }}>A Caçada Selvagem</span>.
          </Texto>
          <Texto>
            O sistema usado será o The Witcher RPG Oficial. A ficha será disponibilizada para download algum tempo antes do RPG, as fichas serão
            montadas em conjunto com o mestre, o sistema é bem complexo e é bom ter um acompanhamento para montar e modificar os status dos personagens.
          </Texto>
          <Imagem src="./escolaDragao.jpeg" loading="lazy" alt="Escola do Dragão" />
        </InnerWrapper>
      </Wrapper>
    </>
  )
}
