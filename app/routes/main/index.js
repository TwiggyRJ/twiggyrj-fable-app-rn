import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getIcon } from '../../lib/helpers';
import { theme } from '../../config/styles';
import FlattendList from '../../components/flattendList';
import Button from '../../components/button';
import Stories from './stories';
import Story from './story';
import Bookmarks from './bookmarks';
import Listing from './listing';
import Menu from './menu';
import Notifications from './notifications';

const TabNav = createBottomTabNavigator(
  {
    StoriesTab: {
      screen: Stories,
      path: '/allstories',
      navigationOptions: {
        title: 'Novella',
        tabBarAccessibilityLabel: 'Stories',
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
    NotificationsTab: {
      screen: Notifications,
      path: '/notifications',
      navigationOptions: {
        title: 'Notifications',
        tabBarAccessibilityLabel: 'Notifications',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={getIcon('bell', !focused)}
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
    initialRouteName: 'StoriesTab',
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
      headerTitle: 'Novella',
      headerStyle: {
        backgroundColor: theme.header.background,
      },
      headerTitleStyle: {
        color: theme.header.text,
        fontFamily: theme.header.font,
        fontSize: 30,
        fontWeight: undefined,
        flex: 1,
        textAlign: 'center',
      },
      headerTintColor: theme.header.text,
    },
  },
);

export default TabNav;
