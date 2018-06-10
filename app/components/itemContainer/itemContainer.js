import React from 'react';
import { Container } from './styles';

const ItemContainer = (props) => {
  return (
    <Container>
      {props.component}
    </Container>
  )
}

export default ItemContainer;
