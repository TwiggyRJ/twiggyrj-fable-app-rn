import React, { Component } from 'react';
import { createDrawerNavigator, createBottomTabNavigator, SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { getIcon } from '../../lib/helpers';
import { styles } from '../../config/styles';
import FlattendList from '../../components/flattendList';
import Button from '../../components/button';
import Home from './stories';
import Story from './story';
import Synopsis from './synopsis';

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
            name={getIcon('home')}
            size={26}
            style={focused ? { color: tintColor } : { color: '#FFF' }}
          />
        ),
      },
    },
    BookmarksTab: {
      screen: Story,
      path: '/bookmarks',
      navigationOptions: {
        title: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={getIcon('bookmark')}
            size={26}
            style={focused ? { color: tintColor } : { color: '#FFF' }}
          />
        ),
      },
    },
    NotificationsTab: {
      screen: Story,
      path: '/settings',
      navigationOptions: {
        title: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={getIcon('notifications')}
            size={26}
            style={focused ? { color: tintColor } : { color: '#FFF' }}
          />
        ),
      },
    },
    SettingsTab: {
      screen: Story,
      path: '/settings',
      navigationOptions: {
        title: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icon
            name={getIcon('person')}
            size={26}
            style={focused ? { color: tintColor } : { color: '#FFF' }}
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
      activeTintColor: styles.secondary,
      showLabel: false,
      style: {
        backgroundColor: styles.primary,
      },
    },
  },
);

export default TabNav;
