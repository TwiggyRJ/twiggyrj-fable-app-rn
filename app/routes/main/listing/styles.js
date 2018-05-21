import { Dimensions } from 'react-native';
import styled from 'styled-components';
import { styles } from '../../../config/styles';

export const Description = styled.Text`
  color: ${styles.text};
  font-size: 18;
  font-style: italic;
  padding: 20px;
`;

export const Genre = styled.Text`
  color: ${styles.overlay.text};
  font-size: 18;
  font-weight: bold;
`;

export const ListingContent = styled.View`
  background: #fff;
  flex: 1;
`;
