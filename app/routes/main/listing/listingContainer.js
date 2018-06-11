import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import autobind from 'autobind-decorator';
import { getDateFormated } from '../../../lib/dates';
import { getIonicIcon } from '../../../lib/helpers';
import Button from '../../../components/button';
import Header from '../../../components/header';
import Author from '../../../components/author';
import { theme, Divider, Spacer } from '../../../config/styles';
import {
  AuthorButton,
  AuthorButtonIcon,
  AuthorStyle,
  AuthorLabel,
  ButtonStyles,
  Container,
  DescriptionContainer,
  Description,
  ListingContent,
  MetaContainer,
  MetaItem,
  MetaLabel,
  MetaValue,
  MetaTitle,
  PlayContainer,
  ButtonText,
  ReadButton,
} from './styles';

class ListingContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: params.story.title,
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
      story: props.navigation.state.params.story || {},
      notRead: Math.random() >= 0.5,
    };
  }

  @autobind
  navigateToProfile() {
    this.props.navigation.navigate(
      'Profile',
      { type: 'author' },
    );
  }

  @autobind
  navigateToStory(storyId) {
    this.props.navigation.navigate('Story', {
      storyId,
    });
  }

  render() {
    return (
      <ParallaxScrollView
        backgroundColor={theme.background.dark}
        contentBackgroundColor={theme.background.light}
        parallaxHeaderHeight={300}
        renderForeground={() => (
          <Header
            cover={this.state.story.cover}
            title={this.state.story.title}
            subcontent={
              <PlayContainer>
                {
                  this.state.notRead ?
                    <Button
                      customStyles={ReadButton}
                      textStyles={ButtonText}
                      text="Read"
                    />
                    :
                    <Button
                      customStyles={ReadButton}
                      textStyles={ButtonText}
                      text="Continue"
                    />
                }
              </PlayContainer>
            }
          />
        )}
      >
        <ListingContent>
          <DescriptionContainer>
            <Description>
              {this.state.story.description}
            </Description>
            <Button
              customStyles={ButtonStyles}
              type="component"
              onPress={() => this.navigateToProfile()}
              component={
                <AuthorButton>
                  <Author
                    author={this.state.story.author.name}
                    avatar={{
                      src: this.state.story.author.avatar,
                      height: 50,
                      width: 50,
                    }}
                    size={18}
                    customStyles={AuthorStyle}
                    color={theme.primary}
                    component={
                      <AuthorLabel>
                        Author
                      </AuthorLabel>
                    }
                  />
                  <AuthorButtonIcon>
                    <Icon
                      name={getIonicIcon('arrow-forward', false)}
                      size={25}
                      style={{ color: theme.text.dark }}
                    />
                  </AuthorButtonIcon>
                </AuthorButton>
              }
            />
          </DescriptionContainer>
          <Divider height={10} />
          <MetaContainer>
            <MetaTitle>
              Information
            </MetaTitle>
            <MetaItem>
              <MetaLabel>Type</MetaLabel>
              <MetaValue>{this.state.story.type}</MetaValue>
            </MetaItem>
            <Divider height={10} />
            <Spacer height={10} />
            <MetaItem>
              <MetaLabel>Genre</MetaLabel>
              <MetaValue>
                {
                  this.state.story.genre.map((genre, index) => {
                    if (this.state.story.genre.length > index + 1) {
                      return `${genre}, `;
                    }
                    return genre;
                  })
                }
              </MetaValue>
            </MetaItem>
            <Divider height={10} />
            <Spacer height={10} />
            <MetaItem>
              <MetaLabel>Published</MetaLabel>
              <MetaValue>{getDateFormated(this.state.story.published)}</MetaValue>
            </MetaItem>
            <Divider height={10} />
            <Spacer height={10} />
            <MetaItem>
              <MetaLabel>Updated</MetaLabel>
              <MetaValue>{getDateFormated(this.state.story.last_modified)}</MetaValue>
            </MetaItem>
            <Divider height={10} />
            <Spacer height={10} />
            <MetaItem>
              <MetaLabel>Edition</MetaLabel>
              <MetaValue>{this.state.story.edition}</MetaValue>
            </MetaItem>
          </MetaContainer>
          <PlayContainer>
            {
              this.state.notRead ?
                <Button
                  customStyles={ReadButton}
                  textStyles={ButtonText}
                  text="Read"
                />
                :
                <Button
                  customStyles={ReadButton}
                  textStyles={ButtonText}
                  text="Continue"
                />
            }
          </PlayContainer>
        </ListingContent>
      </ParallaxScrollView>
    );
  }
}

export default ListingContainer;
