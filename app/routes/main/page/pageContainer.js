import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel';
import autobind from 'autobind-decorator';
import FlattendList from '../../../components/flattendList';
import Button from '../../../components/button';
import StoryListing from '../../../components/storyListing';

@inject('pagesStore')
@observer
class PageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
    };
  }

  componentDidMount() {
    this.props.pageStore.getPage(0);
  }

  @autobind
  navigateToStory(story) {
    this.props.navigation.navigate(
      'Listing',
      { story },
    );
  }

  render() {
    if (!this.props.pagesStore.isLoading && this.props.pagesStore.page) {
      return (
        <ScrollView contentContainerStyle={{
          marginTop: 10,
        }}>
          
        </ScrollView>
      )
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator
          animating={this.state.animating}
          size="large"
        />
      </View>
    )
  }
}

export default PageContainer;
