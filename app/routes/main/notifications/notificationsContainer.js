import { createStackNavigator } from 'react-navigation';
import { headerStyle } from '../../../config/styles';
import Notifications from './notifications';

const NotificationsContainer = createStackNavigator(
  {
    Notifications: {
      path: '/notifications/all',
      screen: Notifications,
    },
  },
  {
    initialRouteName: 'Notifications',
    navigationOptions: headerStyle('Notifications'),
  },
);

export default NotificationsContainer;
