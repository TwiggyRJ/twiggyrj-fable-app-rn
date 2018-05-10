import React from 'react';
import { Text, View, Image, StatusBar, TextInput, TouchableWithoutFeedback } from 'react-native';
import Animation from 'lottie-react-native';
import styles from './styles';
import Button from '../../components/button';
import AnimSky from '../../animations/sky.js';

//<Button style={styles.loginButton} customStyles={ styles.loginButton } textStyles={ styles.loginButtonText } text="Sign In" onPress={() => props.authenticate('john.doe@test.com', 'testing')}/>

const Login = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.spacer}/>
      <TextInput style={styles.textInput} underlineColorAndroid='rgba(0,0,0,0)' placeholder={'Enter email address'} placeholderTextColor={"#FFF"} />
      <TextInput style={styles.textInput} underlineColorAndroid='rgba(0,0,0,0)' placeholder={'Enter password'} placeholderTextColor={"#FFF"} secureTextEntry={true} />
      <Button style={styles.loginButton} customStyles={ styles.loginButton } textStyles={ styles.loginButtonText } text="Sign In" onPress={() => props.navigation.dispatch(props.toNav)}/>
      <TouchableWithoutFeedback onPress={() => alert('Reset Password Button')}>
        <View>
          <Text style={styles.forgottenPassword}>Forgotten Password?</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.seperator}/>
      <View style={styles.signupContainer}>
        <Button style={styles.signupButton} customStyles={styles.signupButton} textStyles={styles.signupButtonText} text="Sign Up" onPress={() => props.register()} />
      </View>
    </View>
  );
};

Login.propTypes = {

};

export default Login;
