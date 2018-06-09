import React, { Component } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/Ionicons';
import autobind from 'autobind-decorator';
import FlattendList from '../../../components/flattendList';
import Button from '../../../components/button';

@inject('bookmarksStore')
@observer
class Bookmarks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
    };
  }

  componentDidMount() {
    this.props.bookmarksStore.getAll();
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
          !this.props.bookmarksStore.isLoading ?
            <FlattendList
              listKey="bookmarksList"
              refreshing={{ action: this.props.bookmarksStore.getAll, state: this.state.refreshing }}
              items={this.props.bookmarksStore.bookmarks}
              length={this.props.bookmarksStore.bookmarks.length}
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

export default Bookmarks;
