import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel';
import autobind from 'autobind-decorator';
import FlattendList from '../../../components/flattendList';
import Button from '../../../components/button';
import StoryListing from '../../../components/storyListing';
import { theme, Divider, Spacer } from '../../../config/styles';

@inject('pagesStore')
@observer
class PageContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: params.story,
      headerTitleStyle: {
        fontFamily: theme.header.font,
        fontSize: 26,
        fontWeight: undefined,
        flex: 1,
        textAlign: 'center',
        marginLeft: 0,
        lineHeight: 36,
      },
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
    };
  }

  componentDidMount() {
    this.props.pagesStore.getPage(0); 
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
        {
          this.props.pagesStore.page.components.map((page) => {
            return (<Text>{page.content}</Text>)
          })
        }
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
