import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getIcon } from '../../../lib/helpers';
import { theme } from '../../../config/styles';
import FlattendList from '../../../components/flattendList';
import Button from '../../../components/button';
import Menu from '../menu';
import Page from '../page';

const StoryTabNav = createBottomTabNavigator(
  {
    PageTab: {
      screen: Page,
      path: '/stories/story/pageContainer',
      navigationOptions: {
        title: 'Novella',
        tabBarAccessibilityLabel: 'Stories',
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="book-open"
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    CharacterTab: {
      screen: Page,
      path: '/stories/story/character',
      navigationOptions: {
        title: 'Bookmarks',
        tabBarAccessibilityLabel: 'Bookmarks',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={getIcon('bookmark', !focused)}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    SaveTab: {
      screen: Page,
      path: '/stories/story/save',
      navigationOptions: {
        title: 'Notifications',
        tabBarAccessibilityLabel: 'Notifications',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={getIcon('content-save', !focused)}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    MenuTab: {
      screen: Menu,
      path: '/menu',
      navigationOptions: {
        title: 'You',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name="menu"
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'PageTab',
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: theme.tabBar.icons.active,
      inactiveTintColor: theme.tabBar.icons.inactive,
      showLabel: false,
      style: {
        backgroundColor: theme.tabBar.background,
        borderTopColor: theme.tabBar.border,
      },
    },
  },
);

export default StoryTabNav;
