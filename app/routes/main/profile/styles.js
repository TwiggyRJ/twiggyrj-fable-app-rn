import styled from 'styled-components/native';
import { theme } from '../../../config/styles';

export const AuthorStyle = `
  flex-grow: 1;
  flex-shrink: 0;
`;

export const Container = styled.View`
  width: 100%;
`;

export const AuthorContainer = styled.View`
  flex: 1;
`;

export const AuthorMetaContainer = styled.View`
  flex-direction: row;
  margin-top: 10;
`;

export const AuthorMeta = styled.Text`
  color: ${theme.text.dark};
  font-size: 14;
  margin-right: 10;
`;

export const ProfileContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const SectionContainer = Container.extend`
  background-color: ${theme.background.light};
  width: 100%;
`;

export const SectionTitle = styled.Text`
  color: ${theme.text.dark};
  font-size: 18;
  margin-bottom: 20;
  margin-left: 20;
  margin-top: 15;
  text-align: left;
`;
