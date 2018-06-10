import React, { Component } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/Ionicons';
import autobind from 'autobind-decorator';
import FlattendList from '../../../components/flattendList';
import Button from '../../../components/button';

//@inject('authStore')
@observer
class NotificationsContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: 'Notifications',
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
    };
  }

  componentDidMount() {
    
  }
/*
  @autobind
  navigateToStory(story) {
    this.props.navigation.navigate(
      'Listing',
      { story },
    );
  }*/

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>lol</Text>
      </View>
    );
  }
}

export default NotificationsContainer;
