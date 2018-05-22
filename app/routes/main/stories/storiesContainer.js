import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/Ionicons';
import autobind from 'autobind-decorator';
import FlattendList from '../../../components/flattendList';
import Button from '../../../components/button';

@inject('storiesStore')
@observer
class StoryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rand: true,
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
            <FlattendList items={this.props.storiesStore.stories} length={this.props.storiesStore.stories.length} navigate={this.navigateToStory} />
          : null
        }
      </View>
    );
  }
}

export default StoryContainer;