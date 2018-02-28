import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = (props) => {
  const { customStyles, textStyles, text, type, icon, onPress } = props;
  if (type === "icon") {
    return (
      <TouchableOpacity style={[styles.button, customStyles]} onPress={onPress}>
        { icon }
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={[styles.button, customStyles]} onPress={onPress}>
        <Text style={[styles.buttonText, textStyles]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
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
