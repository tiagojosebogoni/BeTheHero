import React from 'react';

import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import { Container, Content, FormInput } from './styles';

export default function Logon() {
  const history = useHistory();

  async function handleLogin(data) {
    try {
      const response = await api.post('sessions', data);

      localStorage.setItem('ongID', data.id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (error) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Be The Hero" />
        <FormInput onSubmit={handleLogin}>
          <Input name="id" placeholder="Sua ID" />

          <Button type="submit">Entrar</Button>
        </FormInput>

        <Link to="/register">
          <FiLogIn size={16} color="#E02041" />
          Não tenho cadastro
        </Link>
      </Content>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
