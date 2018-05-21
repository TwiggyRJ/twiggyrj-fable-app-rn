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
      1: '#424242',
      2: '#333333',
    },
  },
  translucent: {
    black: 'rgba(0, 0, 0, 0.4)',
  },
  white: '#FFFFFF',
};

export const styles = {
  primary: colours.blue,
  secondary: colours.pink,
  tabBar: {
    background: colours.grey.light[1],
    border: colours.grey.light[2],
    icons: {
      inactive: colours.grey.medium[1],
      active: colours.blue,
    },
  },
  text: colours.black,
  overlay: {
    background: colours.translucent.black,
    text: colours.white,
  },
};
