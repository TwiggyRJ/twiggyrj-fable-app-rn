import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { inject, observer } from 'mobx-react/native';
import Login from './login';
import navConfig from './navConfig';

const resetAction = NavigationActions.navigate({ routeName: 'Stories' });

@inject("auth")
@observer
class LoginContainer extends Component {
  static navigationOptions = navConfig;

  constructor(props) {
    super(props);

    this.state = {
      rand: true,
    };
  }

  render() {
    return (
      <Login navigation={this.props.navigation} toNav={resetAction} />
    );
  }
}

export default LoginContainer;