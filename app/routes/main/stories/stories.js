import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel';
import autobind from 'autobind-decorator';
import FlattendList from '../../../components/flattendList';
import Button from '../../../components/button';
import StoryListing from '../../../components/storyListing';

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
    this.props.storiesStore.getLandingStories();
  }

  @autobind
  navigateToStory(story) {
    this.props.navigation.navigate(
      'Listing',
      { story },
    );
  }

  render() {
    if (!this.props.storiesStore.isLoading && this.props.storiesStore.stories) {
      return (
        <ScrollView contentContainerStyle={{
          marginTop: 10,
        }}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.props.storiesStore.stories.featured}
            renderItem={({ item, index }) => {
              return (
                <StoryListing
                  story={item}
                  navigate={this.navigateToStory}
                  index={index}
                  styles={index === (this.props.storiesStore.stories.length - 1) ? { marginBottom: 0 } : null}
                />
              )
            }}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width - 50}
          />
          <FlattendList
            listKey="storiesList"
            refreshing={{ action: this.props.storiesStore.getLandingStories, state: this.state.refreshing }}
            items={this.props.storiesStore.stories.all}
            length={this.props.storiesStore.stories.length}
            navigate={this.navigateToStory}
          />
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

export default Stories;
