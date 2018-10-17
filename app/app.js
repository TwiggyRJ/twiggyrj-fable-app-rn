import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider } from 'mobx-react';
import * as stores from './stores';
import Main from './routes/main';
import Login from './routes/login';
import Story from './routes/main/story';
import Button from './components/button';
import { theme } from './config/styles';

const RootStack = createStackNavigator({
  Login: {
    path: '/',
    screen: Login,
  },
  Main: {
    path: '/main',
    screen: Main,
  },
  Story: {
    path: '/stories/story/',
    screen: Story,
  },
},
  {
    initialRouteName: 'Main',
    navigationOptions: {
      header: null,
    },
  },
);

export default class App extends Component {
  render() {
    return [
      <Provider key="app" {...stores}>
        <RootStack />
      </Provider>,
      <StatusBar
        key="main-statusbar"
        backgroundColor={theme.header.statusBar}
        barStyle="light-content"
      />,
    ];
  }
}