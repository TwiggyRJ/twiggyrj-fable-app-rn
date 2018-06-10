import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import autobind from 'autobind-decorator';
import FlattendList from '../../../components/flattendList';
import Button from '../../../components/button';


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: props.person,
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile</Text>
        <Text>{this.state.person.firstname}</Text>
      </View>
    );
  }
}

export default Profile;
