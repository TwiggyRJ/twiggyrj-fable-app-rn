import React, { Component } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { inject, observer } from 'mobx-react/native';
import autobind from 'autobind-decorator';
import { theme } from '../../../config/styles';
import Author from '../../../components/author';
import FlattendList from '../../../components/flattendList';
import Button from '../../../components/button';
import ItemContainer from '../../../components/itemContainer';
import {
  AuthorStyle,
  ProfileContainer,
} from './styles';
import { getAllStories } from '../../../api/stories';

@inject('storiesStore')
@observer
class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: props.person,
      refreshing: false,
    }
  }

  componentDidMount() {
    this.getStories();
  }

  @autobind
  getStories() {
    this.props.storiesStore.getAuthorStories(this.state.person.id);
  }

  render() {
    return (
      <ProfileContainer>
        <ItemContainer
          component={
            <Author
              author={`${this.state.person.firstname} ${this.state.person.lastname}`}
              avatar={{
                src: this.state.person.avatar,
                height: 50,
                width: 50,
              }}
              size={18}
              customStyles={AuthorStyle}
              color={theme.text.dark}
            />
          }
        />
        {
          !this.props.storiesStore.isLoading ?
            <FlattendList
              listKey="profileStoriesList"
              refreshing={{ action: this.getStories, state: this.state.refreshing }}
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
      </ProfileContainer>
    );
  }
}

export default Profile;
