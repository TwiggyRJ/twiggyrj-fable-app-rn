import React from 'react';
import { Dimensions, FlatList, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import StoryListing from '../storyListing';

const FlattendList = (props) => {
  return (
    <FlatList
      style={[styles.list]}
      key="expensesList"
      data={props.items}
      keyExtractor={(item, index) => item.id}
      renderItem={({item, index}) => <StoryListing story={item} index={index} styles={index === (props.length - 1) ? { marginBottom: 0 } : null}/>}/>
  );
};

FlattendList.propTypes = {

};

export default FlattendList;
