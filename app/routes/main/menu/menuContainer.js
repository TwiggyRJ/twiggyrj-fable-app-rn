import { createStackNavigator } from 'react-navigation';
import { headerStyle } from '../../../config/styles';
import Menu from './menu';
import Listing from '../listing';
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
    Listing: {
      path: '/stories/listing',
      screen: Listing,
    },
  },
  {
    initialRouteName: 'Menu',
    navigationOptions: headerStyle('You'),
  },
);

export default MenuContainer;
