import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../config/styles';

export const ButtonContainer = styled.TouchableOpacity`
  padding-vertical: 20px;
  align-self: stretch;
  align-items: center;
  ${props => (props.styling ? props.styling : null)};
`;

export const ButtonText = styled.Text`
  font-size: 16;
  font-weight: 500;
  ${props => (props.styling ? props.styling : null)};
`;
