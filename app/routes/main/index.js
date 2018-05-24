import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getIcon } from '../../lib/helpers';
import { theme } from '../../config/styles';
import FlattendList from '../../components/flattendList';
import Button from '../../components/button';
import Home from './stories';
import Story from './story';
import Bookmarks from './bookmarks';
import Listing from './listing';

const TabNav = createBottomTabNavigator(
  {
    MainTab: {
      screen: Home,
      path: '/home',
      navigationOptions: {
        title: 'Welcome',
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={getIcon('home', !focused)}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    BookmarksTab: {
      screen: Bookmarks,
      path: '/bookmarks',
      navigationOptions: {
        title: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={getIcon('bookmark', !focused)}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    NotificationsTab: {
      screen: Bookmarks,
      path: '/settings',
      navigationOptions: {
        title: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={getIcon('bell', !focused)}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    SettingsTab: {
      screen: Bookmarks,
      path: '/settings',
      navigationOptions: {
        title: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={getIcon('account', !focused)}
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

const ContainerNav = createStackNavigator(
  {
    Listing: {
      path: '/listing',
      screen: Listing,
    },
    MainTabs: {
      path: '/mainTabs',
      screen: TabNav,
    },
  },
  {
    initialRouteName: 'MainTabs',
    navigationOptions: {
      headerTitle: 'Fable',
    },
  },
);

export default ContainerNav;
