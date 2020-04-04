import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import Button from '../../components/Button';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';
import { Container, Header, GroupButton, ButtonPower } from './styles';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  const ongId = localStorage.getItem('ongID');
  const ongName = localStorage.getItem('ongName');

  async function getCases() {
    const response = await api.get('organization ', {
      headers: { Authorization: ongId },
    });

    setIncidents(response.data);
  }

  async function handleDelete(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: { Authorization: ongId },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      alert('Erro ao excluir caso.');
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  useEffect(() => {
    getCases();
  }, [ongId]);

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be The Hero" />
        <span> Bem vinda, {ongName}</span>

        <GroupButton>
          <Button onClick={() => history.push('/incidents/new')}>
            Cadastrar novo caso
          </Button>
          <ButtonPower onClick={handleLogout}>
            <FiPower size={18} color="#e02041" />
          </ButtonPower>
        </GroupButton>
      </Header>

      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <button type="button" onClick={() => handleDelete(incident.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
