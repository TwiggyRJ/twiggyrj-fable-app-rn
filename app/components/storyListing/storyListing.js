import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { truncateText } from '../../lib/formatting';
import { dateFormated } from '../../lib/dates';
import styles, { TagContainer, Tag } from './styles';

const StoryListing = (props) => {
  return (
    <TouchableWithoutFeedback onPress={() => props.navigate(props.story)}>
      <View style={[styles.listingContainer, props.styles]}>
        <Image style={styles.images} source={{uri: props.story.cover}}/>
        <View style={styles.contentContainer}>
          <TagContainer>
            <Tag>{props.story.type}</Tag>
            <Tag>{props.story.genre[0]}</Tag>
          </TagContainer>
          <Text style={styles.title}>{props.story.title}</Text>
          <Text style={styles.description}>{truncateText(props.story.description, 100)}</Text>
          <View style={styles.metaContainer}>
            <View style={styles.authorAvatarContainer}>
              <Image style={styles.authorAvatar} source={{uri: props.story.author.avatar}}/>
            </View>
            <View style={styles.authorContainer}>
              <Text style={styles.author}>{props.story.author.name}</Text>
              <Text style={styles.published}>{dateFormated(props.story.published)}</Text>
            </View>
          </View>   
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

StoryListing.propTypes = {

};

export default StoryListing;
