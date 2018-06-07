import styled from 'styled-components/native';

const colours = {
  black: '#000000',
  blue: {
    main: {
      1: '#4276ba',
      2: '#3b6aac',
    },
  },
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

export const Divider = styled.View`
  border-bottom-color: #EEEEEE;
  border-bottom-width: 1px;
  padding-bottom: ${props => (props.height ? props.height : '0')};
`;

export const Spacer = styled.View`
  height: ${props => props.height};
`;

export const theme = {
  primary: colours.blue.main[1],
  secondary: colours.pink,
  header: {
    statusBar: colours.blue.main[2],
    background: colours.blue.main[1],
    text: colours.white,
    font: 'Nickainley_Normal',
  },
  background: {
    light: colours.white,
    dark: colours.black,
    translucent: colours.translucent.black,
  },
  tabBar: {
    background: colours.blue.main[1],
    border: colours.blue.main[2],
    icons: {
      inactive: colours.white,
      active: colours.pink,
    },
  },
  text: {
    light: colours.white,
    grey: colours.grey.medium[1],
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
