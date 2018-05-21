import { Dimensions } from 'react-native';
import styled from 'styled-components';
import { styles } from '../../config/styles';

export const HeaderContainer = styled.ImageBackground`
  elevation: 1;
  flex: 1;
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height / 3};
  justify-content: flex-end;
`;

export const TitleContainer = styled.View`
  background-color: ${styles.overlay.background};
  padding: 20px;
  width: ${Dimensions.get('window').width};
`;

export const Title = styled.Text`
  color: ${styles.overlay.text};
  font-size: 26;
`;
