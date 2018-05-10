import React, { PureComponent } from 'react';
import { Animated } from 'react-native';
import { TabNavigator, NavigationActions, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/button';
import About from './about';

const MainTab = StackNavigator({
  About: {
    screen: About,
    path: '/main/story/about',
    navigationOptions: {
      title: 'About',
    },
  },
});

const SettingsTab = StackNavigator({
  About: {
    screen: About,
    path: "/main/story/abouts",
    navigationOptions: {
      title: "Abouts"
    }
  }
});

const TabAnimations = TabNavigator(
  {
    MainTab: {
      screen: MainTab,
      path: '/',
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    SettingsTab: {
      screen: SettingsTab,
      path: '/settings',
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-settings' : 'ios-settings-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    configureTransition: (currentTransitionProps, nextTransitionProps) => ({
      timing: Animated.spring,
      tension: 1,
      friction: 35,
    }),
    swipeEnabled: false,
  }
);

export default TabAnimations;