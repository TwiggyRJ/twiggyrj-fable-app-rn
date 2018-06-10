import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/Ionicons';
import autobind from 'autobind-decorator';
import FlattendList from '../../../components/flattendList';
import Button from '../../../components/button';
import Profile from './profile';

@inject('authStore')
@inject('authorStore')
@observer
class ProfileContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: params.type === 'you' ? 'You' : 'Author',
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      type: props.navigation.state.params.type,
      person: props.navigation.state.params.type === 'you' ? this.props.authStore.auth : null,
    };
  }

  componentDidMount() {
    if (!this.state.person) {
      this.props.authorStore.getAuthor();
    }
  }

  componenty(props, state) {
    if (state.person === null && props.authorStore.author) {
      this.setState({ person: props.authorStore.author });
    }
  }

  render() {
    return (
      <ScrollView>
        {
          this.state.person ?
            <Profile person={this.state.person} />
          :
            <View style={{ marginTop: (Dimensions.get('window').height / 3) }}>
              <ActivityIndicator
                animating={this.state.animating}
                size="large"
              />
            </View>
        }
      </ScrollView>
    );
  }
}

export default ProfileContainer;
