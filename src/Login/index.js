import React, { useState, useContext } from 'react';
import { HomeButtom, Container, Input, Button, Title, ErrorMessage, SuccessMessage } from './styles'
import { TokenContext } from '../Contexts/TokenContext'
import { api } from '../libs/Api';

export default function LoginPage() {

  const { HandleTokenSave } = useContext(TokenContext)
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const [Error, setError] = useState(null)
  const [Sucesso, setSucesso] = useState(false)

  const login = () => {
    api.post('/register/login', {
      Username,
      Password
    })
      .then(res => HandleTokenSave(res.data))
      .catch(err => {
        setError(err.response.data.error)
        setSucesso(false)
      })
  }

  const cadastro = () => {
    api.post('/register', {
      Username,
      Password
    })
      .then(res => {
        console.log(res)
        setSucesso(true)
        setError(null)
      })
      .catch(err => {
        setSucesso(false)
        setError(err.response.data.error)
      })
  }

  return (
    <Container>
      <Title>"Fale, amigo, e entre."</Title>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
        <Input type="text" placeholder="Informe seu username"
          value={Username} onChange={e => setUsername(e.target.value)}
        />
        <Input type="password" placeholder="Informe sua senha"
          value={Password} onChange={e => setPassword(e.target.value)}
        />
      </div>
      <Button onClick={login}> Entrar </Button>
      <Button primary onClick={cadastro}> Cadastrar </Button>
      {Error && <ErrorMessage>{Error}*</ErrorMessage>}
      {Sucesso && <SuccessMessage>Cadastro concluído!</SuccessMessage>}
      <a href="/"><HomeButtom>Home</HomeButtom></a>
    </Container>
  );
}