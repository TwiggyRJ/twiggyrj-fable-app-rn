import { createStackNavigator } from 'react-navigation';
import { headerStyle } from '../../../config/styles';
import Listing from '../listing';
import Stories from './stories';

const StoriesContainer = createStackNavigator(
  {
    Stories: {
      path: '/stories/all',
      screen: Stories,
    },
  },
  {
    initialRouteName: 'Stories',
    navigationOptions: headerStyle('Novella'),
  },
);

export default StoriesContainer;
