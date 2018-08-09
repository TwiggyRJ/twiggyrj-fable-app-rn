import { createStackNavigator } from 'react-navigation';
import { headerStyle } from '../../../config/styles';
import Stories from './stories';
import Listing from '../listing';
import Profile from '../profile';
import Page from '../page';
import Story from '../story';

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
    Profile: {
      path: '/stories/listing/profile',
      screen: Profile,
    },
    Page: {
      path: '/stories/story/page',
      screen: Page,
    },
  },
  {
    initialRouteName: 'Stories',
    navigationOptions: headerStyle('Novella'),
  },
);

export default StoriesContainer;
