import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../config/styles';

export default StyleSheet.create({
  forgottenPassword: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.primary};
`;

export const TextField = styled.TextInput`
  background-color: rgba(255,255,255,0.25);
  color: ${theme.text.light};
  font-size: 16;
  text-decoration-line: none;
  height: 50;
  margin-top: 20;
  align-self: stretch;
  margin-left: 35;
  margin-right: 35;
  padding-left: 15;
`;

export const LoginButton = `
  background-color: ${theme.secondary};
  border-radius: 50;
  margin-top: 20px;
  margin-left: 35px;
  margin-right: 35px;
  margin-bottom: 20px;
`;

export const LoginButtonText = `
  color: ${theme.text.light};
`;

export const Seperator = styled.View`
  background-color: rgba(255,255,255,0.25);
  height: 2;
  width: ${Dimensions.get('window').width / 1.75};
`;

export const SignupContainer = styled.View`
  position: absolute;
  bottom: 40;
  left: 0;
  right: 0;
`;

export const SignupButton = `
  background-color: ${theme.secondary};
  border-radius: 50;
  margin-top: 20px;
  margin-left: 35px;
  margin-right: 35px;
`;

export const SignupButtonText = `
  color: ${theme.text.light};
`;
