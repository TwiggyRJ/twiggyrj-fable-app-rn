import { createStackNavigator } from 'react-navigation';
import { headerStyle } from '../../../config/styles';
import Menu from './menu';
import Profile from '../profile';

const MenuContainer = createStackNavigator(
  {
    Menu: {
      path: '/menu/main',
      screen: Menu,
    },
    Profile: {
      path: '/menu/main/profile',
      screen: Profile,
    },
  },
  {
    initialRouteName: 'Menu',
    navigationOptions: headerStyle('You'),
  },
);

export default MenuContainer;
