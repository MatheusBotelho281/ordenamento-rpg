import React from 'react'
import Modal from './Modal'
import { useState } from 'react'
import { Wrapper, InnerWrapper } from '../PersonagensComponents/Header/styles'

export default function Header(props) {

  const [img, setImg] = useState('https://media.discordapp.net/attachments/501196063613648900/824023816002994206/placeholdereocaralho.png?width=380&height=676')
  const [opcao, setOpcao] = useState('Selecione uma Opção...')
  const [link, setLink] = useState('')

  const Modelo1 = {
    img: './Ficha 1.png',
    opcao: 'Download',
    link: './Ficha Oficial D&D 5E Editável.pdf'
  }
  const Modelo2 = {
    img: './Ficha 2.png',
    opcao: 'Download',
    link: './Ficha Oficial D&D 5E Editável Edição 2021.pdf'
  }
  const LivroJogador = {
    img: './LDJ.png',
    opcao: 'Download',
    link: './LDJ.pdf'
  }
  const LivroMestre = {
    img: './GM.png',
    opcao: 'Download',
    link: './GM.pdf'
  }
  const ManualMonstros={
    img: './MM.png',
    opcao: 'Download',
    link: './MM.pdf'
  }
  const Tasha={
    img: './TCE.png',
    link:'./TCE.pdf'
  }
  function toggleLink(img, opcao, link) {
    setImg(img)
    setOpcao(opcao)
    setLink(link)
  }


  return (
    <Wrapper>
      <div>
        <a href='/' className='voltar'>
          Home
        </a>
        <h1>
          {props.pagina}
        </h1>
      </div>
      <InnerWrapper>
        <ul>
          <li onClick={() => toggleLink(Modelo1.img, Modelo1.opcao, Modelo1.link)}>
            Ficha Modelo 1</li>
          <li onClick={() => toggleLink(Modelo2.img, Modelo2.opcao, Modelo2.link)}>
            Ficha Modelo 2</li>
          <li onClick={() => toggleLink(LivroJogador.img, LivroJogador.opcao, LivroJogador.link)}>
            Livro do Jogador</li>
          <li onClick={() => toggleLink(LivroMestre.img, LivroMestre.opcao, LivroMestre.link)}>
            Guia do Mestre</li>
          <li onClick={() => toggleLink(ManualMonstros.img, ManualMonstros.opcao, ManualMonstros.link)}>
            Manual dos Monstros</li>
          <li onClick={() => toggleLink(Tasha.img, ManualMonstros.opcao, Tasha.link)}>
            Caldeirão de Tasha</li>
        </ul>
        <Modal
          imagem={img}
          opcao={opcao}
          download={link} />
      </InnerWrapper>
    </Wrapper>
  )
}
