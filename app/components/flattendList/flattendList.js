import React from 'react';
import { FlatList, Text } from 'react-native';
import styles from './styles';
import StoryListing from '../storyListing';

const FlattendList = (props) => {
  return (
    <FlatList
      style={[styles.list]}
      key={props.listKey}
      data={props.items}
      refreshing={props.refreshing.state}
      onRefresh={() => props.refreshing.action}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={props.ItemSeparatorComponent}
      ListEmptyComponent={props.ListEmptyComponent}
      ListHeaderComponent={props.ListHeaderComponent}
      ListFooterComponent={props.ListFooterComponent}
      renderItem={({ item, index }) => <StoryListing story={item} navigate={props.navigate} index={index} />}
    />
  );
};

FlattendList.propTypes = {

};

export default FlattendList;
