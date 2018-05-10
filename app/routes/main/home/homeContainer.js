import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import * as storiesActions from '../../../actions/stories';
import FlattendList from '../../../components/flattendList';
import Button from '../../../components/button';

class HomeContainer extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: 'Fable',
      headerRight: (<Button customStyles={{padding: 20}} onPress={navigation.navigate('DrawerToggle')} type="icon" icon={<Icon name="md-menu" size={30} color="#333" />}/>)
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      rand: true,
    };

    this.navigateToStory = this.navigateToStory.bind(this);
  }

  componentWillMount() {
    this.props.onGetStories();
  }

  navigateToStory(story) {
    this.props.navigation.navigate('Synopsis');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {
          Array.isArray(this.props.stories) && this.props.stories.length > 0 ?
            <FlattendList items={this.props.stories} length={this.props.stories.length} navigate={this.navigateToStory}/>
          : null
        }
      </View>
    );
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    stories: state.stories
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    onGetStories: () => dispatch(storiesActions.getStories()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);