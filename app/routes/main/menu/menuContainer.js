import { createStackNavigator } from 'react-navigation';
import { headerStyle } from '../../../config/styles';
import Menu from './menu';

const MenuContainer = createStackNavigator(
  {
    Menu: {
      path: '/menu/main',
      screen: Menu,
    },
  },
  {
    initialRouteName: 'Menu',
    navigationOptions: headerStyle('You'),
  },
);

export default MenuContainer;
