import { createStackNavigator } from 'react-navigation';
import { headerStyle } from '../../../config/styles';
import Stories from './stories';
import Listing from '../listing';

const StoriesContainer = createStackNavigator(
  {
    Stories: {
      path: '/stories/all',
      screen: Stories,
    },
    Listing: {
      path: '/stories/listing',
      screen: Listing,
    },
  },
  {
    initialRouteName: 'Stories',
    navigationOptions: headerStyle('Novella'),
  },
);

export default StoriesContainer;
