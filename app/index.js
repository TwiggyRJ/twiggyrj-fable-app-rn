import React, { Component } from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Provider } from 'mobx-react';
import * as stores from './stores';
import Main from './routes/main';
import Login from './routes/login';
import Button from './components/button';
import { styles } from './config/styles';

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
        drawer: () => ({
          label: 'Stories', 
          icon: ({ tintColor }) => (
            <Icon
              name="ios-menu"
              size={24}
            />
          ),
        }),
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: styles.primary,
      inactiveTintColor: styles.text,
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
