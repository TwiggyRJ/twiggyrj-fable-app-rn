import React, { Component } from 'react';
import { inject, observer } from 'mobx-react/native';
import { CachedImage } from 'react-native-cached-image';
import styles, { Container, StoryBlock } from './styles';

@inject('storyStore')
@observer
class DrawerContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <StoryBlock>
          {
            this.props.storyStore.story ?
              <CachedImage style={styles.images} source={{ uri: this.props.storyStore.story.cover }} />
            : null
          }
        </StoryBlock>
      </Container>
    )
  }
}

export default DrawerContainer;
