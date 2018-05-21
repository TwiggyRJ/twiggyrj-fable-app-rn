import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/button';
import Header from '../../../components/header';
import { Description, Genre, ListingContent } from './styles';

class ListingContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: 'Fables',
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      story: props.navigation.state.params.story || {},
    };

    this.navigateToStory = this.navigateToStory.bind(this);
  }

  componentWillMount() {
    //this.props.onGetStories();
  }

  navigateToStory(storyId) {
    this.props.navigation.navigate('Story', {
      storyId,
    });
  }

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Header
          cover={this.state.story.cover}
          title={this.state.story.title}
          subcontent={
            <Genre>
              {
                this.state.story.genre.map((genre, index) => {
                  if (this.state.story.genre.length > index + 1) {
                    return `${genre}, `;
                  }
                  return genre;
                })
              }
            </Genre>
          } />
        <ListingContent>
          <Description>
            {this.state.story.description}
          </Description>
        </ListingContent>
      </View>
    );
  }
}

export default ListingContainer;
