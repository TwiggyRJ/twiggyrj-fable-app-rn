import styled from 'styled-components/native';
import { theme } from '../../config/styles';

export const HeaderContainer = styled.ImageBackground`
  elevation: 1;
  flex: 1;
  width: 100%;
  justify-content: flex-end;
`;

export const TitleContainer = styled.View`
  background-color: ${theme.overlay.background};
  padding: 20px;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${theme.overlay.text};
  font-size: 26;
`;
