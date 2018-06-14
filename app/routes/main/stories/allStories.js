import React, { Component } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/Ionicons';
import autobind from 'autobind-decorator';
import FlattendList from '../../../components/flattendList';
import Button from '../../../components/button';

@inject('storiesStore')
@observer
class Stories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
    };
  }

  componentDidMount() {
    this.props.storiesStore.getAll();
  }

  @autobind
  navigateToStory(story) {
    this.props.navigation.navigate(
      'Listing',
      { story },
    );
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {
          !this.props.storiesStore.isLoading ?
            <FlattendList
              listKey="storiesList"
              refreshing={{ action: this.props.storiesStore.getAll, state: this.state.refreshing }}
              items={this.props.storiesStore.stories}
              length={this.props.storiesStore.stories.length}
              navigate={this.navigateToStory}
            />
          :
            <ActivityIndicator
              animating={this.state.animating}
              size="large"
            />
        }
      </View>
    );
  }
}

export default Stories;
