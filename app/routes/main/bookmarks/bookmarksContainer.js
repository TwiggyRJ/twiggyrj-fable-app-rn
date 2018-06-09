import { createStackNavigator } from 'react-navigation';
import { headerStyle } from '../../../config/styles';
import Bookmarks from './bookmarks';

const BookmarksContainer = createStackNavigator(
  {
    Bookmarks: {
      path: '/bookmarks/all',
      screen: Bookmarks,
    },
  },
  {
    initialRouteName: 'Bookmarks',
    navigationOptions: headerStyle('Bookmarks'),
  },
);

export default BookmarksContainer;
