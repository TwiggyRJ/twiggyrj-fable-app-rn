import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/button';
import TabNav from './tabs';
import { styles } from '../../config/styles';

const MainStack = createDrawerNavigator(
  {
    Stories: {
      screen: TabNav,
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
      activeTintColor: styles.text,
      inactiveTintColor: styles.text,
    },
    headerMode: 'none',
    navigationOptions: {
      header: null,
      headerTitle: 'Fable',
      headerRight: (
        <Button
          customStyles={{ padding: 20 }}
          type="icon"
          icon={<Icon name="md-menu" size={30} color="#333" />}
        />
      ),
    },
  },
);

export default class Main extends Component {
  static navigationOptions = {
    title: 'Fable',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
  };

  render() {
    return (
      <MainStack />
    );
  }
}
