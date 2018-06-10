import styled from 'styled-components/native';
import { theme } from '../../config/styles';

export const Container = styled.View`
  border-top-width: 1px;
  border-bottom-width: ${props => (props.bottomBorder ? '1px' : '0px' )};
  border-top-color: ${theme.listingContainer.border};
  border-bottom-color: ${theme.listingContainer.border};
  background-color: ${theme.listingContainer.background};
  elevation: 1;
  padding: 20px;
  width: 100%;
  height: ${props => (props.height ? props.height : 'auto')};
`;
