import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { inject, observer } from 'mobx-react/native';
import autobind from 'autobind-decorator';
import Login from './login';

@inject("auth")
@observer
class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rand: true,
    };
  }

  @autobind
  navigateToApp() {
    this.props.navigation.navigate(
      'Main',
    );
  }

  render() {
    return (
      <Login navigate={this.navigateToApp} />
    );
  }
}

export default LoginContainer;