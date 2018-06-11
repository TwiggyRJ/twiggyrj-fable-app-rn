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
  AuthorContainer,
  AuthorMeta,
  AuthorMetaContainer,
  AuthorStyle,
  Container,
  ProfileContainer,
  SectionContainer,
  SectionTitle,
} from './styles';

@inject('authorStore')
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
    this.props.authorStore.getAuthorStories(this.state.person.id);
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
      <ProfileContainer>
        <SectionContainer>
          <ItemContainer
            component={
              <AuthorContainer>
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
                <AuthorMetaContainer>
                  <AuthorMeta>
                    {this.state.person.following} Following
                  </AuthorMeta>
                  <AuthorMeta>
                    {this.state.person.followers} Followers
                  </AuthorMeta>
                </AuthorMetaContainer>
              </AuthorContainer>
            }
          />
        </SectionContainer>
        <Container>
          <SectionTitle>Latest Stories</SectionTitle>
        </Container>
        {
          !this.props.authorStore.isLoading && this.props.authorStore.stories ?
            <SectionContainer>
              <FlattendList
                listKey="profileStoriesList"
                refreshing={{ action: this.getStories, state: this.state.refreshing }}
                items={this.props.authorStore.stories}
                length={this.props.authorStore.stories.length}
                navigate={this.navigateToStory}
              />
            </SectionContainer>
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
