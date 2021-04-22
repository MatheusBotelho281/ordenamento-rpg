import React from 'react'
import { InnerWrapper, Wrapper, Menu } from './styles'
import Modal from '../Modal'
import { useState } from 'react'
import { Icone } from '../../../styles/styles'

export default function Header() {

  const [personagem, setPersonagem] = useState('Nome do Personagem')
  const [historia, setHistoria] = useState('História')
  const [fim, setFim] = useState('Destino')
  const [player, setPlayer] = useState('')
  const [esquerda, setEsquerda] = useState('0')
  const [linkImagem, setLinkImagem] = useState('https://media.discordapp.net/attachments/501196063613648900/824023816002994206/placeholdereocaralho.png?width=380&height=676')

  const Alazar = {
    nome: 'Alazar, O Demônio Incorruptível',
    historia: 'Criado em uma vilã de elfos junto com Eliza, sua amiga de infância. Aos 10 anos foi vítima do grilhão e ficou traumatizado. Fugiu com Eliza. No meio do caminho ela ficou para trás para que ele conseguisse fugir. Correu e fugiu por anos até ser resgatado por um monastério. Ficou lá por anos até o grupo encontrá-lo.',
    fim: 'Após o fim da guerra, o Ordenamento desceu até o nono círculo do inferno para buscar seu velho amigo. Derrotaram os 7 pecados e restauraram a alma de Alazar. Agora governa o primeiro círculo ao lado de Morgana, sua rainha.',
    player: 'Pedro',
    imagem: 'https://media.discordapp.net/attachments/501196063613648900/823984084556185610/Alazar.png?width=380&height=676'
  }

  const Annabeth ={
    nome: 'Annabeth Chase, A Inocência Vindoura',
    historia: 'Annabeth foi criada em uma vila pequena, gostava de brincar com seu irmão no lago, mas era proibido entrar nele. O irmão entrou, morreu, e Annabeth foi culpada pela morte dele. Seu pai foi para cima dela e ela o matou. Fugiu foragida da vila jurando para sua mãe que voltaria com dinheiro o suficiente para levá-la para um lugar melhor.',
    fim: 'Annabeth após a guerra contra Citos, conseguiu se tornar Sentinela da cidade de Fairheaven. Com ajuda da rainha, trouxe sua mãe para a cidade, onde viveu protegendo a servindo à coroa até o fim da sua vida aos 67 anos.',
    player: 'Pedro',
    imagem: 'https://media.discordapp.net/attachments/501196063613648900/824000250431406120/Annabeth.png?width=380&height=676'
  }

  const Aquos ={
    nome: 'Aquos Preyas, O Sacrifício',
    historia: '',
    fim: '',
    player: 'Thomaz',
    imagem: 'https://media.discordapp.net/attachments/501196063613648900/824002373663719464/Aquos.png?width=380&height=676'
  }

  const Barachiel ={
    nome:'Barachiel Norixius',
    historia:'',
    fim:'',
    player:'Alequin',
    imagem:'https://media.discordapp.net/attachments/501196063613648900/824782556645556224/Barachiel.png?width=380&height=676'
  }

  const Christopher ={
    nome:'Christopher',
    historia:'Christopher foi um Aasimar caído, que se rebelou durante uma excursão dos Aasimares. Caiu e se aliou ào Lorde Vampiro como espião, trabalhando em primeiro lugar para Dendar, a deusa Cobra que engoliu o sol e muitos deuses durante a guerra. Christopher se aliou ao grupo durante a guerra contra os vampiros.',
    fim:' Foi morto 2 semanas depois de entrar no grupo pelo líder dos rubros.',
    player:'Pedro',
    imagem:'https://media.discordapp.net/attachments/501196063613648900/824360307954286602/Chris.png?width=380&height=676'
  }

  const Djinko ={
    nome:'Djinko Talorharg',
    historia:'Nascido para servir a Rainha de Rapina, acabou se rebelando em uma das missões, onde viu crianças sendo sacrificadas em um velho ritual. Após ser expulso e se tornar um aasimar caido, vagou pelo mundo até ser resgatado e se tornar um bardo. Sua memória foi apagada, e sua busca pela verdade o levou até um encontro com o Ordenamento.',
    fim:'Acabou caindo após poucas semanas com o grupo, dentro de uma construção onde houve um combate.',
    player:'Botelho',
    imagem:'https://media.discordapp.net/attachments/501196063613648900/824007093182791730/Djinko.png?width=380&height=676'
  }

  const Halric ={
    nome:'Halric Sahvot, O Guardião Cinzento',
    historia:'Criado por um velho draconato, Halric e seus 2 irmãos se tornaram importantes membros da sociedade de Sarlona, cada um de seu jeito. Ainda jovem, cometeu um erro que seria lembrado por séculos e o perseguiria. Em sua busca por redenção acabou por encontrar Ryu, quem foi seu aprendiz por alguns anos, até os caminhos e objetivos divergirem. O destino do Ordenamento fez com que ambos se encontrassem e participassem do destino do mundo. Halric acabou por se tornar um dos Notáveis na Quarta Era.',
    fim:'Ainda anda pelo mundo, ajudando todos que consegue, sendo um dos poucos com acesso comum à magia.',
    player:'Botelho',
    imagem:'https://media.discordapp.net/attachments/501196063613648900/824005149210574889/Halric.png?width=380&height=676'
  }

  const Harold ={
    nome:'Mestre Harold Shump',
    historia:'',
    fim:'',
    player:'Pedro',
    imagem:'https://media.discordapp.net/attachments/501196063613648900/824006152588886026/Harold.png?width=380&height=676'
  }

  const Ithuryel ={
    nome: 'Ithuryel',
    historia: '',
    fim: '',
    player: 'Alequin',
    imagem: 'https://media.discordapp.net/attachments/501196063613648900/824782556901670912/Ithuryel.png?width=380&height=676'
  }

  const Leo ={
    nome: 'Leo Valdez',
    historia:'Leo, nasceu em uma cidade avançada na questão de maquinário e inteligência mecânica, além da conexão entre magia e tecnologia. Namorava Calipso e em um dos experimentos acabou mandando ela para o Plano Etéreo. Então, saiu em busca de uma forma de resgatá-la.',
    fim:'Léo, após terminar a guerra contra Bel, conseguiu um favor dos deuses. Bahamut o ajudou a trazer Calipso do plano etéreo e com ela voltou para sua cidade natal, onde se tornou conhecido por suas histórias e invenções que transcendiam a inteligência comum.',
    player:'Pedro',
    imagem:'https://media.discordapp.net/attachments/501196063613648900/824022193968382002/Leo.png?width=380&height=676'
  }

  const Levi ={
    nome: 'Levi Ackerman',
    historia: 'Criado em uma vila de humanos em que uma guerra entre Humanos e Gigantes foi travada, Aos 8 anos ele começou a ser treinado como um soldado e aos 11 ele já era o melhor da sua tropa e o líder de uma, ele foi encontrado por Alazar que o salvou no final de uma guerra, apos Levi ver sua família ser morta na sua frente pelo mesmo gigante.',
    fim: 'Apos o fim da guerra, e a recuperação de Alazar, o seu salvador. Ele reencontrou sua Prima Mikasa e junto com ela refundou a tropa de exploração, morreu de velhice apos anos e anos treinando varias pessoas.',
    player: 'Matheus',
    imagem: 'https://media.discordapp.net/attachments/501196063613648900/824066380332138546/Levi.png?width=380&height=676'
  }

  const Lunar ={
    nome: 'Lunar, A Ira Latente',
    historia: '',
    fim: '',
    player: 'Thomaz',
    imagem: 'https://media.discordapp.net/attachments/501196063613648900/824359886678786078/Lunar.png?width=380&height=676'
  }

  const Maximus ={
    nome: 'Maximus',
    historia: '',
    fim: '',
    player: 'Alequin',
    imagem: 'https://media.discordapp.net/attachments/501196063613648900/824429683143213156/Maximus.png?width=380&height=676'
  }

  const Merle ={
    nome: 'Merle Lumos, O Portador da Chave',
    historia: '',
    fim: '',
    player: 'Rodolpho',
    imagem: 'https://media.discordapp.net/attachments/501196063613648900/824341358550188142/Mei_Rerle.png?width=380&height=676'
  }

  const Molly ={
    nome: 'Mollymauk TeaLeaf, Dança Escarlate',
    historia: '',
    fim: '',
    player: 'Alequin',
    imagem: 'https://media.discordapp.net/attachments/501196063613648900/824783890140364810/E_mole_nao.png?width=380&height=676'
  }

  const Morgana ={
    nome: 'Morgana Sardothien, Traidora Falha',
    historia: 'Seus pais eram nobres péssimos, pessoas más. Em um ataque de revolta popular, Tymora salvou Morgana e a levou para a floresta, onde conheceu seu patrono arquifada com apenas 8 anos. Quando estava pronta, foi enviada para roubar o Fragmento Elemental da Água. Por fim, falhou em trair o grupo e acabou se tornando parte do ordenamento.',
    fim: 'A libertação de Alazar trouxe uma chance nova em sua vida, ao lado de quem ela realmente amava. Se tornou rainha ao lado do velho tiefling, governando todos os nove círculos do inferno.',
    player: 'Milena',
    imagem: 'https://media.discordapp.net/attachments/501196063613648900/824072423451656222/Morgana.png?width=380&height=676'
  }

  const Ryu ={
    nome: 'Ryu Straub, deus da sorte',
    historia: 'Ryu foi criado pelo seu avô, Fou-Lu, antigo paladino de Bahamut. Ainda jovem foi obrigado a sair de sua casa após um ataque de Bel à sua vila, Tymora o salvou. Quando pôde sair do orfanato, começou a procurar por respostas, quando acabou encontrando Halric em uma de suas viagens sem rumo. Treinou por alguns anos enquando buscava sentido na vida, até que foi obrigado a seguir seu caminho separado do mestre. Se encontraram anos mais tarde, vindo a fazer parte do Ordenamento.',
    fim: 'Ascendeu como deus da sorte alguns anos após o fim da guerra, com ajuda de Molly e Halric, construiu a Ordem de Prata, a Ordem Terceira Prateada e o Monastério do Filho do Dragão. Ainda tenta ajudar todos para manter sua promessa a Tymora.',
    player: 'Guto',
    imagem: 'https://media.discordapp.net/attachments/501196063613648900/824029288864284742/Grande_pequeno_Ryu.png?width=380&height=676'
  }

  const Syria ={
    nome: 'Syria Whitethorn',
    historia: '',
    fim: '',
    player: 'Thomaz',
    imagem: 'https://media.discordapp.net/attachments/501196063613648900/824784146718785566/Syria.png?width=380&height=676'
  }

  const Vark ={
    nome: 'Vark',
    historia: '',
    fim: '',
    player: 'Alequin',
    imagem: 'https://media.discordapp.net/attachments/501196063613648900/824782556385902643/Vark.png?width=380&height=676'
  }

  const Yuna ={
    nome: 'Yuna Galathynius, Olho de Apolo',
    historia: 'Não aceitando o fato de que os elfos do sol se achavam superiores, acabou abandonando a casa de seu família. Sentindo o chamado de Apolo, se tornou oráculo dele, entregando-se a ele totalmente. Acabou sofrendo com uma maldição que foi reduzida pela força de Alazar, quem ajudou ela após a guerra.',
    fim: 'Se manteve como serva de Apolo, retornando a pedido do deus para seu povo, tendo que proteger eles de um mal que ainda estava por vir.',
    player: 'Milena',
    imagem: 'https://media.discordapp.net/attachments/501196063613648900/824069727018025050/Puta.png?width=380&height=676'
  }

  function setPersonag(nome, historia, final, jogad, link) {
    setPersonagem(nome)
    setHistoria(historia)
    setFim(final)
    setPlayer(jogad)
    setLinkImagem(link)
  }

  return (
    <Wrapper>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', border: 'none', borderBottom:'2px solid white'}}>
        <a href='/' className='voltar'>
          Home
        </a>
        <h1 style={{filter: 'drop-shadow(20px 10px 4px #000000)'}}>
          Personagens
      </h1>
      </div>
      <InnerWrapper>
        <ul>
          <li onClick={() => setPersonag(Alazar.nome, Alazar.historia, Alazar.fim, Alazar.player, Alazar.imagem)}>
            Alazar</li>
          <li onClick={() => setPersonag(Annabeth.nome, Annabeth.historia, Annabeth.fim, Annabeth.player, Annabeth.imagem)}>
            Annabeth</li>
          <li onClick={() => setPersonag(Aquos.nome, Aquos.historia, Aquos.fim, Aquos.player, Aquos.imagem)}>
            Aquos</li>
          <li onClick={() => setPersonag(Barachiel.nome, Barachiel.historia, Barachiel.fim, Barachiel.player, Barachiel.imagem)}>
            Barachiel</li>
          <li onClick={() => setPersonag(Christopher.nome, Christopher.historia, Christopher.fim, Christopher.player, Christopher.imagem)}>
            Christopher</li>
          <li onClick={() => setPersonag(Djinko.nome, Djinko.historia, Djinko.fim, Djinko.player, Djinko.imagem)}>
            Djinko</li>
          <li onClick={() => setPersonag(Halric.nome, Halric.historia, Halric.fim, Halric.player, Halric.imagem)}>
            Halric</li>
          <li onClick={() => setPersonag(Harold.nome, Harold.historia, Harold.fim, Harold.player, Harold.imagem)}>
            Harold</li>
          <li onClick={() => setPersonag(Ithuryel.nome, Ithuryel.historia, Ithuryel.fim, Ithuryel.player, Ithuryel.imagem)}>
            Ithuryel</li>
          <li onClick={() => setPersonag(Leo.nome, Leo.historia, Leo.fim, Leo.player, Leo.imagem)}>
            Leo</li>
          <li onClick={() => setPersonag(Levi.nome, Levi.historia, Levi.fim, Levi.player, Levi.imagem)}>
            Levi</li>
          <li onClick={() => setPersonag(Lunar.nome, Lunar.historia, Lunar.fim, Lunar.player, Lunar.imagem)}>
            Lunar</li>
          <li onClick={() => setPersonag(Maximus.nome, Maximus.historia, Maximus.fim, Maximus.player, Maximus.imagem)}>
            Maximus</li>
          <li onClick={() => setPersonag(Merle.nome, Merle.historia, Merle.fim, Merle.player, Merle.imagem)}>
            Merle</li>
          <li onClick={() => setPersonag(Molly.nome, Molly.historia, Molly.fim, Molly.player, Molly.imagem)}>
            Molly</li>
          <li onClick={() => setPersonag(Morgana.nome, Morgana.historia, Morgana.fim, Morgana.player, Morgana.imagem)}>
            Morgana</li>
          <li onClick={() => setPersonag(Ryu.nome, Ryu.historia, Ryu.fim, Ryu.player, Ryu.imagem)}>
            Ryu</li>
          <li onClick={() => setPersonag(Syria.nome, Syria.historia, Syria.fim, Syria.player, Syria.imagem)}>
            Syria</li>
          <li onClick={() => setPersonag(Vark.nome, Vark.historia, Vark.fim, Vark.player, Vark.imagem)}>
            Vark</li>
          <li onClick={() => setPersonag(Yuna.nome, Yuna.historia, Yuna.fim, Yuna.player, Yuna.imagem)}>
            Yuna</li>
        </ul>
        <Modal
          nomePersonagem={personagem}
          historia={historia}
          destino={fim}
          jogador={player}
          imagem={linkImagem} />
      </InnerWrapper>
    </Wrapper>
  )
}
