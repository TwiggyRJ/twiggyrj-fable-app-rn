import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import FlattendList from '../../components/flattendList';
import Button from '../../components/button';
import Home from './stories';
import Story from './story';
import Synopsis from './synopsis';

const MainStack = createDrawerNavigator(
  {
    Stories: {
      screen: Home,
      navigationOptions: {
        drawer: () => ({
          label: 'Stories',
          icon: ({ tintColor }) => (
            <Icon
              name="ios-menu"
              size={24}
            />
          ),
        }),
      }
    },
  },
);

export default class Main extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: 'Fable',
      headerRight: (<Button customStyles={{ padding: 20 }} onPress={navigation.navigate('DrawerToggle')} type="icon" icon={<Icon name="md-menu" size={30} color="#333" />} />),
    };
  };

  render() {
    return (
      <MainStack />
    );
  }
}
