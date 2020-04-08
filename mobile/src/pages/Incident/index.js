import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import IncidentItem from '../../components/IncidentItem';
import {
  Container,
  Header,
  HeaderText,
  HeaderTextBold,
  Title,
  Description,
  IncidentsList,
  DetailsButton,
  DetailsButtonText,
} from './styles';

export default function Incident() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const navigation = useNavigation();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function navigateToDetails(incident) {
    navigation.navigate('Detail', { incident });
  }

  async function loadIncidents() {
    if (loading) return;

    if (total > 0 && incidents.length === total) {
      return;
    }
    setLoading(true);
    const response = await api.get('incidents', {
      params: { page },
    });

    setIncidents([...response.data, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          Total de casos <HeaderTextBold>{total} casos</HeaderTextBold>
        </HeaderText>
      </Header>
      <Title>Bem-Vindo</Title>
      <Description>Escolha um dos casos abaixo</Description>

      <IncidentsList
        data={incidents}
        keyExtractor={(incident) => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <IncidentItem
            ong={incident.name}
            caseName={incident.title}
            value={Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(incident.value)}
          >
            <DetailsButton onPress={() => navigateToDetails(incident)}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Icon name="arrow-right" size={16} color="#e02041" />
            </DetailsButton>
          </IncidentItem>
        )}
      />
    </Container>
  );
}
