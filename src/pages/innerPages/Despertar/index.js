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
  width: 400px;
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


export default function Despertar() {

  return (
    <>
      <Wrapper>
        <iframe className="discord" src="https://discord.com/widget?id=517026316378308629&theme=dark" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        <InnerWrapper>
          <Título>
            Despertar do Campeão Gélido
          </Título>
          <Texto>
            Aventura de D&D para quem quer começar no jogo, ou até mesmo já teva alguma experiência com RPG de mesa.
            </Texto>
          <Texto>
            Existem algumas raças e classes que moldam o jogo, "Mas o que exatamente seria essa parada?", lhe respondo, digamos que
            você queira fazer um Elfo Arqueiro, então eu diria que uma boa ideia seria usar a <span style={{ fontWeight: "700", color: "green" }}>Classe de Patrulheiro</span> com
            a <span style={{ fontWeight: "700", color: "green" }}>Raça de Elfo da Floresta</span>, o que lhe daria uma vantagem para atirar as flechas. Também existe a possibilidade
            de criar um guerreiro com foco em arcos.<br />
          </Texto>
          <Texto>
            Existem muitas combinações possíveis, o mundo de um RPG é algo complexo e livre, quase tudo o que se é descrito é interagivel,
            não se limite apenas ao que lhe é mostrado, converse com o mestre da mesa, retire suas dúvidas, e caso alguma coisa não lhe agrade
            sempre tem um jeito de resolver tudo, afinal, o jogo é para todos.
          </Texto>
          <Texto>
            Abaixo estão algumas das classes disponíveis:
          </Texto>
          <ul>
            <li>Bárbaro</li>
            <li>Bardo</li>
            <li>Bruxo</li>
            <li>Clérigo</li>
            <li>Druida</li>
            <li>Feiticeiro</li>
            <li>Guerreiro</li>
            <li>Ladino</li>
            <li>Mago</li>
            <li>Monge</li>
            <li>Paladino</li>
            <li>Patrulheiro</li>
          </ul>
          <Texto>
            E aqui, algumas das raças:
          </Texto>
          <ul>
            <li>Anão</li>
            <li>Elfo</li>
            <li>Halfling</li>
            <li>Humano</li>
            <li>Draconato</li>
            <li>Gnomo</li>
            <li>Meio-Elfo</li>
            <li>Meio-Orc</li>
            <li>Tiefling</li>
          </ul>
          <Texto>
            A mesa será mestrada por <span style={{ fontWeight: "700" }}>Botelho</span>, "Mas o que é um mestre?", também lhe respondo, é quem monta o mundo para a aventura,
            tudo o que acontecer deve ser comunicado para ele, justamente porque ele é quem molda os acontecimentos de acordo com
            as escolhas dos jogadores, que devem saber sempre, tudo tem consequências. Dificuldades existirão sempre.
          </Texto>
          <Texto>
            Um pacote com o necessário está abaixo, apenas clique e baixe ele, não é pesado.
          </Texto>
          <a href="./Pack de Iniciante.zip" download><Botao>Baixar Pacote de Iniciante</Botao></a>
          <Texto>
            Entre no discord e comunique que vai querer participar da aventura, assim será mais fácil organizar tudo e ajudar quem tem dúvidas.
          </Texto>
        </InnerWrapper>
      </Wrapper>
    </>
  )
}
