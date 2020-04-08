import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity, Image, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import {
  Container,
  Header,
  Contact,
  HeroiTitle,
  HeroiDescription,
  Actions,
  ActionButton,
  ActionButtonText,
} from './styles';
import IncidentItem from '../../components/IncidentItem';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const { incident } = route.params;
  const ong = `${incident.name} de ${incident.city}/${incident.uf}`;
  const message = `Olá ${incident.name}, gostaria de ajudar no caso
  ${incident.title} com valor de ${Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(incident.value)}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    /* MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: incident.email,
      body: message,
    }); */
  }

  function sendWhatsApp() {
    Linking.openURL(
      `whatsapp://send?text=${message}&phone=${incident.whatsapp}`
    );
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Icon name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </Header>
      <IncidentItem
        ong={ong}
        caseName={incident.title}
        value={Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(incident.value)}
      />

      <Contact>
        <HeroiTitle>Salve o dia!</HeroiTitle>
        <HeroiTitle>Seja o herói desse caso.</HeroiTitle>

        <HeroiDescription>Entre em contato:</HeroiDescription>

        <Actions>
          <ActionButton onPress={sendWhatsApp}>
            <ActionButtonText>WhatsApp</ActionButtonText>
          </ActionButton>

          <ActionButton onPress={sendMail}>
            <ActionButtonText>E-mail</ActionButtonText>
          </ActionButton>
        </Actions>
      </Contact>
    </Container>
  );
}
