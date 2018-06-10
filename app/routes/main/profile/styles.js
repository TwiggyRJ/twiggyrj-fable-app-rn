import styled from 'styled-components/native';
import { theme } from '../../../config/styles';

export const AuthorStyle = `
  flex-grow: 1;
  flex-shrink: 0;
`;

export const ProfileContainer = styled.View`
  align-items: center;
  background-color: ${theme.background.light};
  justify-content: center;
  flex: 1;
`;
