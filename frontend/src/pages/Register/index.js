import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Form } from '@unform/web';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';
import { Container, Content } from './styles';

export default function Register() {
  const history = useHistory();

  async function handleSubmit(data) {
    const response = await api.post('ongs', data);

    try {
      alert(`Seu id de acesso ${response.data.id}`);

      history.push('/');
    } catch (e) {
      alert('Erro no seu cadastro.');
    }
  }

  return (
    <Container>
      <Content>
        <div>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sus ING.
          </p>
          <Link to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </div>
        <Form onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome da ONG" />
          <Input name="email" placeholder="E-mail" />
          <Input name="whatsapp" placeholder="WhatsApp" />

          <div>
            <Input name="city" placeholder="Cidade" />
            <Input name="uf" placeholder="UF" style={{ width: 80 }} />
          </div>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
