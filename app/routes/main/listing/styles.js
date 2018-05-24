import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../../config/styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AuthorButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const AuthorButtonIcon = styled.View`
  padding: 10px;
`;

export const AuthorLabel = styled.Text`
  font-size: 16;
  color: ${theme.text.grey};
`;

export const AuthorStyle = `
  flex-grow: 1;
  flex-shrink: 0;
`;

export const DescriptionContainer = styled.View`
  padding-bottom: 20px;
`;

export const Description = styled.Text` 
  color: ${theme.text.dark};
  font-size: 18;
  font-style: italic;
`;

export const Divider = styled.View`
  border-bottom-color: #EEEEEE;
  border-bottom-width: 1px;
  padding-bottom: ${props => (props.space ? props.space : '0')};
`;

export const MetaValue = styled.Text`
  color: ${theme.text.dark};
  font-size: 18;
  font-weight: bold;
`;

export const Meta = styled.Text`

`;

export const MetaContainer = styled.View`
  border-bottom-color: #EEEEEE;
  border-bottom-width: 1px;
  padding-top: 10px;
  padding-bottom: 20px;
`;

export const MetaItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const MetaTitle = styled.Text`
  color: ${theme.text.dark};
  font-size: 26;
`;

export const ListingContent = styled.View`
  background: #fff;
  padding: 20px;
`;

export const PlayContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin-top: 10px;
`;

export const ButtonStyles = `
  align-items: flex-start;
  padding-bottom: 0px;
  width: 100%;
`;

export const ReadButton = `
  background-color: ${theme.primary};
  border-radius: 50;
  height: 35;
  padding: 5px 20px;
`;

export const ButtonText = `
  color: ${theme.text.light};
`;

/*

position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
*/
