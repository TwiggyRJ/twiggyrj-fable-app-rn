import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import * as storiesActions from '../../../actions/stories';
import FlattendList from '../../../components/flattendList';
import Button from '../../../components/button';
import Header from '../../../components/header';

class SynopsisContainer extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: params.story.title,
      headerRight: (
        <Button
          customStyles={{ padding: 20 }}
          onPress={navigation.navigate('DrawerToggle')}
          type="icon"
          icon={<Icon name="md-menu" size={30} color="#333" />}
        />
      ),
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      story: {
        "id": "1",
        "title": "Much ado about Nothing",
        "cover": "https://images-na.ssl-images-amazon.com/images/I/51WvFNzw89L._SX371_BO1,204,203,200_.jpg",
        "author": {
          "id": "1",
          "name": "William Shakespeare",
          "avatar": "https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzgzMzkwNzMz/william-shakespeare-194895-1-402.jpg"
        },
        "genre": [
          "Classical",
          "Play",
          "Theatre",
        ],
        "type": "classic",
        "views": 1000,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nisl quis est finibus placerat eu eu mi. Fusce eget suscipit eros. Curabitur eget enim sagittis, gravida diam non, ultricies odio.",
        "published": "2013-02-04T18:35:24+00:00",
        "last_modified": "2013-02-04T18:35:24+00:00"
      }
    };

    this.navigateToStory = this.navigateToStory.bind(this);
  }

  componentWillMount() {
    this.props.onGetStories();
  }

  navigateToStory(storyId) {
    this.props.navigation.navigate('Story', {
      storyId,
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Header cover={this.state.story.cover} title={this.state.story.title} />
      </View>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => ({
    stories: state.stories
  });

// Maps actions to props
const mapDispatchToProps = (dispatch) => ({
    onGetStories: () => dispatch(storiesActions.getStories())
  });

export default connect(mapStateToProps, mapDispatchToProps)(SynopsisContainer);
