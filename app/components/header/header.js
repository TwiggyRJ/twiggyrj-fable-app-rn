import React from 'react';
import { HeaderContainer, TitleContainer, Title } from './styles';

const Header = (props) => {
  const { cover, title, subcontent } = props;
  return (
    <HeaderContainer source={{ uri: cover }}>
      <TitleContainer>
        <Title>{title}</Title>
        { subcontent }
      </TitleContainer>
    </HeaderContainer>
  );
};

Header.propTypes = {

};

export default Header;
