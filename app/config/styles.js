import styled from 'styled-components/native';

const colours = {
  black: '#000000',
  blue: '#4276ba',
  pink: '#d2599b',
  grey: {
    light: {
      1: '#f2f2f2',
      2: '#EEEEEE',
    },
    medium: {
      1: '#757575',
      2: '#424242',
      3: '#333333',
    },
  },
  translucent: {
    black: 'rgba(0, 0, 0, 0.4)',
  },
  white: '#FFFFFF',
};

export const Spacer = styled.View`
  height: ${props => props.height};
`;

export const theme = {
  primary: colours.blue,
  secondary: colours.pink,
  tabBar: {
    background: colours.grey.light[2],
    border: colours.grey.light[2],
    icons: {
      inactive: colours.grey.medium[2],
      active: colours.blue,
    },
  },
  text: {
    light: colours.white,
    dark: colours.black,
  },
  listing: {
    title: colours.black,
    description: colours.black,
    meta: colours.grey.medium[1],
  },
  overlay: {
    background: colours.translucent.black,
    text: colours.white,
  },
};
