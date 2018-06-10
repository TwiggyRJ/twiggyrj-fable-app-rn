import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import autobind from 'autobind-decorator';
import Profile from './profile';
import { theme } from '../../../config/styles';

@inject('authStore')
@inject('authorStore')
@observer
class ProfileContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: params.type === 'you' ? 'You' : 'Author',
      headerTitleStyle: {
        color: theme.header.text,
        fontFamily: theme.header.font,
        fontSize: 30,
        fontWeight: undefined,
        flex: 0.85,
        textAlign: 'center',
      },
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

  render() {
    return (
      <ScrollView>
        {
          this.state.person || this.props.authorStore.author ?
            <Profile person={this.state.person || this.props.authorStore.author} />
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
