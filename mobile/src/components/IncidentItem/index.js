import React from 'react';

import { Container, IncidentProperty, IncidentValue } from './styles';

export default function IncidentItem({ ong, caseName, value, children }) {
  return (
    <Container>
      <IncidentProperty>ONG</IncidentProperty>
      <IncidentValue>{ong}</IncidentValue>
      <IncidentProperty>CASO:</IncidentProperty>
      <IncidentValue>{caseName}</IncidentValue>
      <IncidentProperty>VALOR</IncidentProperty>
      <IncidentValue>{value}</IncidentValue>
      {children}
    </Container>
  );
}
