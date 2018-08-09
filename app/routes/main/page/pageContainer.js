import { createStackNavigator } from 'react-navigation';
import { headerStyle } from '../../../config/styles';
import Page from './page';

const PageContainer = createStackNavigator(
  {
    Page: {
      path: '/stories/story/page/',
      screen: Page,
    },
  },
  {
    initialRouteName: 'Page',
    navigationOptions: headerStyle('Novella'),
  },
);

export default PageContainer;
