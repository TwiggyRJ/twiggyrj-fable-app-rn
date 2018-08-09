import React from 'react';
import { Container } from './styles';

const ItemContainer = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default ItemContainer;
