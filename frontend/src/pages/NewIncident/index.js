import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FiArrowLeft } from 'react-icons/fi';

import { Form } from '@unform/web';
import api from '../../services/api';

import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

export default function NewIncident() {
  const ongId = localStorage.getItem('ongID');
  const history = useHistory();

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required('Título é obrigatório'),
        description: Yup.string().required('Descrição é obrigatório'),
        value: Yup.number().required('Valor é obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('incidents', data, {
        headers: { Authorization: ongId },
      });

      history.push('/profile');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        error.errors.map((e) => console.log(e));
      } else alert('Erro ao inserir caso.');
    }
  }

  return (
    <Container>
      <Content>
        <div>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrara um herói para
            resolver isso
          </p>
          <Link to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </div>
        <Form onSubmit={handleSubmit}>
          <Input name="title" placeholder="Título do caso" />
          <TextArea name="description" placeholder="Descrição" />

          <Input name="value" placeholder="Valor em R$" />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
