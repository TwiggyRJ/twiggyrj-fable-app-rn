import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { ButtonContainer, ButtonText } from './styles';

const Button = (props) => {
  const { customStyles, textStyles, text, type, component, onPress } = props;
  if (type === 'component') {
    return (
      <ButtonContainer styling={customStyles} onPress={onPress}>
        { component }
      </ButtonContainer>
    );
  } else if (type === 'container') {
    return (
      <TouchableOpacity onPress={onPress}>
        { component }
      </TouchableOpacity>
    );
  }

  return (
    <ButtonContainer styling={customStyles} onPress={onPress}>
      <ButtonText styling={textStyles}>
        {text}
      </ButtonText>
    </ButtonContainer>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  text: 'Button Text',
  // eslint-disable-next-line no-console
  onPress: () => console.log('Button Pressed'),
};

export default Button;
