import React, { useState } from 'react';
import { HomeButtom, Container, Input, Button, Title, ErrorMessage } from './styles'
import firebase from '../data/Firebase';
import { useRouter } from 'next/router';
import { api } from '../libs/Api'

export default function LoginPage() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [erroDeViado, setErroDeViado] = useState(null)

  const Router = useRouter();

  const login = () => {
    api.post('/register/login', {
      Username: email,
      Password: pass
    })
      .then(res => console.log(res.data))
      .catch(err => setErroDeViado(err.response.data.error))
  }

  const cadastro = () => {
    api.post('/register', {
      Username: email,
      Password: pass
    })
      .then(res => console.log(res.data))
      .catch(err => setErroDeViado(err.response.data.error))
  }


  return (
    <Container>
      <Title>"Fale, amigo, e entre."</Title>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
        <Input type="email" placeholder="Informe seu email"
          value={email} onChange={e => setEmail(e.target.value)}
        />
        <Input type="password" placeholder="Informe sua senha"
          value={pass} onChange={e => setPass(e.target.value)}
        />
      </div>
      <Button onClick={login}> Entrar </Button>
      <Button primary onClick={cadastro}> Cadastrar </Button>
      {erroDeViado && <ErrorMessage>{erroDeViado}*</ErrorMessage>}
      <a href="/"><HomeButtom>Home</HomeButtom></a>
    </Container>
  );
}