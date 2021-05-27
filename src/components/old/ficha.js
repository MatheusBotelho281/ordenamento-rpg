import React from 'react'
import styled from 'styled-components'
import { useState, useRef } from 'react'

export default function ficha() {

  const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  input{
    margin: 10px;
    height: 80px;
    width: 80px;
    font-size: 58px;
    text-align: center;
    border-radius: 0;
    border: none;
  }
  .divisoria1{
    display: flex;
    flex-direction: column;
  }
  .teste{
    width: 100px;
    height: 100px;
    background-color: white;
    margin: 1%;
    cursor: pointer;
    font-size: 50px;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  `
  const Atributos = styled.div`
  margin-left: 3%;
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  `
  const Dados = styled.div`
  margin-top: 3%;
  margin-left: 3%;
  width: auto;
  height: auto;
  input{
    margin: 10px;
    height: 50px;
    width: 470px;
    font-size: 30px;
    border-radius: 0;
    border: none;
    padding-left: 15px;
    text-align: left;
  }
  .menor{
    margin: 10px;
    height: 50px;
    width: 225px;
    font-size: 30px;
    border-radius: 0;
    border: none;
    padding-left: 15px;
    text-align: left;

  }
  `
  const [forca, setForca] = useState(11)
  const [Forca, setFor] = useState('')
  const For = useRef(null)

  function adicionar() {
    setForca(2 + forca)
  }
  function subtrair() {

  }
  setInterval(function checkFor() {
    if (forca == 11) {
      setFor('0')
    } if (forca == 13) {
      setFor('+1')
    } if (forca >= 15) {
      setFor('+2')
    } if (forca >= 17) {
      setFor('+3')
    } if (forca >= 19) {
      setFor('+4')
    } if (forca >= 20) {
      setFor('+5')
    }
  }, 500);
  return (
    <>
      <Wrapper>
        <div className='divisoria1'>
          <Dados>
            <input maxLength="24" placeholder='Nome do Personagem' />
            <div style={{ display: 'flex' }}>
              <input className="menor" maxLength="12" placeholder='Classe' />
              <input className="menor" maxLength="12" placeholder='Raça' />
            </div>
          </Dados>
          <Atributos>
            <buttom onClick={adicionar} className='teste'>
              +
            </buttom>
            <buttom onClick={subtrair} className='teste'>
              -
            </buttom>
            <p style={{ color: 'white' }}>{Forca}</p>
          </Atributos>
        </div>
      </Wrapper>
    </>
  )
}

