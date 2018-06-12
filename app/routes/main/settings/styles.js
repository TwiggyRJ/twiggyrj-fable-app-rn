import styled from 'styled-components/native';
import { theme } from '../../../config/styles';

export const MenuContainer = styled.View`
  align-items: flex-start;
  flex: 1;
  justify-content: flex-start;
`;

export const AuthorLabel = styled.Text`
  font-size: 14;
  color: ${theme.primary};
`;

export const AuthorStyle = `
  flex-grow: 1;
  flex-shrink: 0;
`;

export const SettingsContainer = styled.View`
  elevation: 1;
  margin-bottom: 20;
  width: 100%;
`;

export const VersionContainer = styled.View`
  margin-left: 20;
  width: 100%;
`;
