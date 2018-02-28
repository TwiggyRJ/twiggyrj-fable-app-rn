import React, { PureComponent } from "react";
import { DrawerNavigator, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import FlattendList from '../../components/flattendList';
import Button from '../../components/button';
import Home from "./home";

const MainStack = DrawerNavigator(
  {
    Home: {
      screen: Home,
      path: '/main/home'
    },
  },
  {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#00BCD4',
    },
  }
);

export default class Main extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: 'Fable',
      headerRight: (<Button customStyles={{padding: 20}} onPress={navigation.navigate('DrawerToggle')} type="icon" icon={<Icon name="md-menu" size={30} color="#333" />}/>)
    };
  };

  render() {
    return (
      <MainStack />
    );
  }
}
