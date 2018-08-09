import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CachedImage } from 'react-native-cached-image';
import { Button } from 'react-native-anubis-component-library';
import { formatNumber, truncateText } from '../../lib/formatting';
import { getDateFormated } from '../../lib/dates';
import Author from '../author';
import { theme, Spacer } from '../../config/styles';
import styles, { MetaContainer, TagContainer, Tag, ViewedContainer, Viewed } from './styles';

const StoryListing = (props) => {
  return (
    <View>
      <Button
        platformProps={{
          containerStyles: `height: ${null}`,
          isHighlight: false,
          ripple: theme.button.ripple.light,
          rippleBorder: false,
        }}
        customStyles={`height: ${null}`}
        type="component"
        onPress={() => props.navigate(props.story)}
      >
        <View style={[styles.listingContainer, props.styles]}>
          <CachedImage style={styles.images} source={{ uri: props.story.cover }} />
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{props.story.title}</Text>
            <Text style={styles.description}>{truncateText(props.story.description, 100)}</Text>
            <MetaContainer>
              <TagContainer>
                <Tag>{props.story.type}</Tag>
                <Tag>{props.story.genre[0]}</Tag>
              </TagContainer>
              <ViewedContainer>
                <Icon
                  name="eye"
                  size={20}
                />
                <Viewed>{formatNumber(props.story.views)} views</Viewed>
              </ViewedContainer>
            </MetaContainer>
            <Spacer height="20" />
            <Author
              author={props.story.author.name}
              avatar={{
                src: props.story.author.avatar,
                height: 50,
                width: 50,
              }}
              size={14}
              color={theme.text.dark}
              component={
                <Text>
                  {getDateFormated(props.story.published)}
                </Text>
              }
            />
          </View>
        </View>
      </Button>
      <Spacer height={10} />
    </View>
  );
};

StoryListing.propTypes = {

};

export default StoryListing;
