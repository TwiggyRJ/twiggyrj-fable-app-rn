import { createStackNavigator } from 'react-navigation';
import { headerStyle } from '../../../config/styles';
import Menu from './menu';
import Listing from '../listing';
import Profile from '../profile';
import Settings from '../settings';

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
      path: '/profile/stories/listing',
      screen: Listing,
    },
    Settings: {
      path: '/menu/main/settings',
      screen: Settings,
    },
  },
  {
    initialRouteName: 'Menu',
    navigationOptions: headerStyle('You'),
  },
);

export default MenuContainer;
