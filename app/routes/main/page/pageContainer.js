import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CachedImage } from 'react-native-cached-image';
import autobind from 'autobind-decorator';
import Button from '../../../components/button';
import { initInteraction } from '../../../lib/interaction';
import { theme, Divider, Spacer } from '../../../config/styles';
import styles, {
  Dialogue,
  DialogueBlock,
  DialogueText,
  DialogueTextBlock,
  Interaction,
  InteractionButton,
  InteractionButtonText,
  InteractionText,
  InteractionOptions,
  Text,
} from './styles';

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
          marginTop: 0,
        }}>
          {
            this.props.pagesStore.page.components.map((component) => {
              if (component.type === 'text') {
                return (<Text key={component.id}>{component.content}</Text>);
              } else if (component.type === 'image') {
                return (<CachedImage key={component.id} style={{ height: Dimensions.get('window').width * 0.5, width: Dimensions.get('window').width}} source={{ uri: component.src }} />);
              } else if (component.type === 'dialogue') {
                const dialogue = component.content.map((content, index) => {
                  return (
                    <Dialogue alignment={content.align} noMargin={index === (component.content.length - 1)} key={content.id}>
                      <CachedImage style={styles.dialogueImage} source={{ uri: content.image }} />
                      <DialogueTextBlock>
                        <DialogueText alignment={content.align}>{content.speaker}</DialogueText>
                        <DialogueText alignment={content.align}>
                          {content.dialogue}
                        </DialogueText>
                      </DialogueTextBlock>
                    </Dialogue>
                  );
                });
                return (
                  <DialogueBlock key={component.id}>
                    {dialogue}
                  </DialogueBlock>
                );
              } else if (component.type === 'interaction') {
                return (
                  <Interaction key={component.id}>
                    <InteractionText>{component.description}</InteractionText>
                    <Spacer height="20" />
                    <InteractionOptions>
                      {
                        component.options.map(option => {
                          return(
                            <Button
                              key={option.id}
                              customStyles={InteractionButton}
                              textStyles={InteractionButtonText}
                              type="text"
                              text={option.choice}
                              onPress={() => initInteraction(option)}
                            />
                          )
                        })
                      }
                    </InteractionOptions>
                  </Interaction>
                );
              }
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
