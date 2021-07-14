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


export default function Despertar() {

  return (
    <>
      <Wrapper>
        <iframe className="discord" src="https://discord.com/widget?id=517026316378308629&theme=dark" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        <InnerWrapper>
          <Título>
            O Campeão Gélido |<span style={{ fontSize: "23px" }}> 14/07/2021</span>
          </Título>
          <Texto>
            “Na Grande Era da Escuridão, a mais de 1000 anos, a esperança da Aliança estava fraca, havia perdido muitos soldados na
            luta contra os males que afligiam as Terras Livres. Elfos e humanos lutavam lado a lado, anãos e gnomos fortaleciam as
            linhas de defesa e todos os outros povos se misturavam em um aglomerado de guerreiros prontos para entregar tudo o que
            tinham. Tarrasques e gigantes marchavam, o Rei Litch marchava à frente controlando a todos, invocando o que fosse necessário
            com sua vã magia.
          </Texto>
          <Texto>
            Em meio a tanto desespero um dos guerreiros, Draron SunBlood, elfo das baixas castas, decidiu partir junto de uma comitiva
            atrás de uma velha lenda. Nos reinos gelados, além do Mar Esquecido, existe uma fonte de poder para aquele que puder
            derrubar o Senhor Gélido, guardião da porta para os reinos mágicos de Ranemalor, fonte de toda magia bruta do mundo.
            Durante um ano inteiro viajaram por terra, água e ar, enfrentaram criaturas nunca antes vistas, alguns desses membros
            do grupo foram perdidos no percurso, no final, apenas 3 dos 11 chegaram ao destino.
          </Texto>
          <Imagem src="./reino-de-gelo.jpg" />
          <Texto>
            O reino estava destruído, o gelo e o frio intenso tinham matado a todos ali, a arquitetura era peculiar, não dava para
            saber a quanto tempo aquele povo havia vivido ali. Caminharam até o velho castelo, no topo da montanha, ali encontraram
            um velho e decrépito homem, curvado enquanto dormia em paz, em sua cabeça uma coroa feita de um gelo negro, era ela a
            chave entre esse plano e o plano magico.
          </Texto>
          <Texto>
            Atacaram o Senhor Gélido, mas este resistiu aos golpes, girando uma espada de gelo puro em resposta aos ataques, atingiu
            um dos aliados de Draron, a batalha se estendeu por muito tempo, em um momento o Senhor de Gelo acabou vacilando na
            hora de dar um passo de ajuste, Draron e um de seus aliados se arremessaram em direção do velho, cortando fora sua cabeça
            com muito esforço.
          </Texto>
          <Texto>
            Retornaram para a sua terra, os três estavam machucados, carregavam a coroa junto, a chamaram de Chave do Verdadeiro Gelo.
            Chegaram de volta depois de 2 anos de viagem, resolveram ir pelo caminho mais seguro, evitando conflitos desnecessários.
            Quando viram o que havia ocorrido, já era quase tarde demais, as forças inimigas avançaram muitora pidamente, tinham agora
            apenas uma parte de dez do continente, estavam lutando de um para dois mil, a derrota era inevitável, pelo menos até aquele
            momento.
          </Texto>
          <Texto>
            Draron se pôs em frente ao exército, posicionou a coroa na cabeça e a magia fluiu em seu corpo, a guerra foi vencida apenas
            depois de mais 3 anos de conflitos, dessa vez com a magia ao lado da Aliança. Depois de tudo isso, Draron, agora chamado
            de Campeão Gélido, se pôs em exílio, a magia da coroa havia se prendido a sua alma permanentemente, e ele não seria forte
            o suficiente para se manter distante da Corrupção Arcana. Alguns dizem que ele está em outro plano, outros que ele voltou
            para as terras de onde havia adquirido a coroa, no final das contas, ninguém saberá." <br/>
            <span style={{color: "lightgray"}}>Trecho do antigo Livro do Marco Gélido, por Harold o Grande.</span>
          </Texto>
          <div style={{ width: "100%", height: "2px", backgroundColor: "gray", margin: "30px 0 30px 0" }}></div>
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
