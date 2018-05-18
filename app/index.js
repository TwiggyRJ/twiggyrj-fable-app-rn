import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'mobx-react';
import * as stores from './stores';
import Main from './routes/main';
import Login from './routes/login';

const RootStack = createStackNavigator(
  {
    Login: {
      path: '/',
      screen: Login,
    },
    Main: {
      path: '/main',
      screen: Main,
    },
  },
  {
    initialRouteName: 'Main',
  },
);

export default class App extends Component {
  render() {
    return (
      <Provider { ...stores }>
        <Main />
      </Provider>
    );
  }
}
