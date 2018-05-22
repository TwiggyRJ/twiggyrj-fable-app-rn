import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { formatNumber, truncateText } from '../../lib/formatting';
import { dateFormated } from '../../lib/dates';
import styles, { MetaContainer, TagContainer, Tag, ViewedContainer, Viewed } from './styles';

const StoryListing = (props) => {
  return (
    <TouchableWithoutFeedback onPress={() => props.navigate(props.story)}>
      <View style={[styles.listingContainer, props.styles]}>
        <Image style={styles.images} source={{uri: props.story.cover}}/>
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
