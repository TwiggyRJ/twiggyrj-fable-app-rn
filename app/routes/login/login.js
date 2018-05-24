import React from 'react';
import { Text, View, Image, StatusBar, TextInput, TouchableWithoutFeedback } from 'react-native';
import Animation from 'lottie-react-native';
import styles, { Container, TextField, LoginButton, LoginButtonText, Seperator, SignupContainer, SignupButton, SignupButtonText } from './styles';
import Button from '../../components/button';
import AnimSky from '../../animations/sky.js';
import { theme, Spacer } from '../../config/styles';

const Login = (props) => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Spacer height="100" />
      <TextField
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder={'Enter email address'}
        placeholderTextColor={theme.text.light}
      />
      <TextField
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder={'Enter password'}
        placeholderTextColor={theme.text.light}
        secureTextEntry={true}
      />
      <Button
        customStyles={LoginButton}
        textStyles={LoginButtonText}
        text="Sign In"
        onPress={() => props.navigate()}
      />
      <TouchableWithoutFeedback onPress={() => alert('Reset Password Button')}>
        <View>
          <Text style={styles.forgottenPassword}>Forgotten Password?</Text>
        </View>
      </TouchableWithoutFeedback>
      <Seperator />
      <SignupContainer>
        <Button
          customStyles={SignupButton}
          textStyles={SignupButtonText}
          text="Sign Up"
          onPress={() => props.register()}
        />
      </SignupContainer>
    </Container>
  );
};

Login.propTypes = {

};

export default Login;
