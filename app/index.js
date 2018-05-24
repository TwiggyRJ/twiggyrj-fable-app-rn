import React, { Component } from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider } from 'mobx-react';
import * as stores from './stores';
import Main from './routes/main';
import Login from './routes/login';
import Button from './components/button';
import { theme } from './config/styles';

const RootStack = createStackNavigator({
  Login: {
    path: '/',
    screen: Login,
  },
  Main: createDrawerNavigator({
    Stories: {
      screen: Main,
      navigationOptions: {
        header: null,
        drawerLabel: 'Home', 
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="home"
            size={24}
            style={{color: tintColor}}
          />
        ),
      },
    },
  },
  {
    drawerPosition: 'right',
    contentOptions: {
      activeTintColor: theme.primary,
      inactiveTintColor: theme.text.dark,
    },
  }),
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
    return (
      <Provider {...stores}>
        <RootStack />
      </Provider>
    );
  }
}
