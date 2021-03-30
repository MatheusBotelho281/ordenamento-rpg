import React, {useState} from 'react';
import {HomeButtom, Container, Input, Button, Title} from './styles'
import firebase from '../data/Firebase';

export default function LoginPage() {
  
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  

  const login = () => {
    firebase.auth().signInWithEmailAndPassword(email, pass).then(user => {
      window.location.href(user)
		})
  }
  
  const cadastro = () => {
    firebase.auth().createUserWithEmailAndPassword(email, pass).then(user => {
      console.log(user)
    })
  }


  return (
   <Container> 
     <Title>"Fale, amigo, e entre."</Title>
     <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center',justifyContent: 'center',marginBottom: '15px'}}>
      <Input type="email" placeholder="Informe seu email"
      value={email} onChange={e=> setEmail(e.target.value)}
      />
      <Input type="password" placeholder="Informe sua senha"
      value={pass} onChange={e=> setPass(e.target.value)}
      />
      </div>
      <Button onClick={login}> Entrar </Button>
      <Button primary onClick={cadastro}> Cadastrar </Button>
      <a href="/"><HomeButtom>Home</HomeButtom></a>
   </Container>   
  );
}