import { createStackNavigator } from 'react-navigation';
import { headerStyle } from '../../../config/styles';
import Bookmarks from './bookmarks';
import Listing from '../listing';

const BookmarksContainer = createStackNavigator(
  {
    Bookmarks: {
      path: '/bookmarks/all',
      screen: Bookmarks,
    },
    Listing: {
      path: '/bookmarks/listing',
      screen: Listing,
    },
  },
  {
    initialRouteName: 'Bookmarks',
    navigationOptions: headerStyle('Bookmarks'),
  },
);

export default BookmarksContainer;
