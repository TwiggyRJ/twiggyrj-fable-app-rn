import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/users';
import Login from './login';
import navConfig from './navConfig';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Main'})
  ]
})


class LoginContainer extends PureComponent {
  static navigationOptions = navConfig;

  constructor(props) {
    super(props);

    this.state = {
      rand: true,
    };
  }

  render() {
    return (
      <Login navigation={this.props.navigation} toNav={resetAction}/>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticate: (email, password) => dispatch(usersActions.authenticate(email, password)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);