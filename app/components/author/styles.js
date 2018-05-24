import styled from 'styled-components/native';

export const AuthorContainer = styled.View`
  flex-direction: row;
  ${props => props.styling};
`;

export const AuthorAvatarContainer = styled.View`
  border-radius: 25;
  overflow: hidden;
  height: ${props => props.height};
  width: {props => props.width};
`;

export const TextContainer = styled.View`
  margin-left: ${props => (props.avatar ? '15px' : '0px')};
`;

export const AuthorAvatar = styled.Image`
  height: ${props => props.height};
  width: {props => props.width};
`;

export const AuthorName = styled.Text`
  color: ${props => props.color};
  font-size: ${props => props.size};
`;
