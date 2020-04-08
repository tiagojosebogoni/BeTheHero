import styled from 'styled-components/native';
import { FlatList, TouchableOpacity } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  font-size: 15px;
  color: #737380;
`;

export const HeaderTextBold = styled.Text`
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-top: 48px;
  margin-bottom: 16px;
  color: #13131a;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
`;

export const IncidentsList = styled(FlatList)`
  margin-top: 32px;
`;

export const DetailsButton = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DetailsButtonText = styled.Text`
  color: #e02041;
  font-size: 15px;
  font-weight: bold;
`;
