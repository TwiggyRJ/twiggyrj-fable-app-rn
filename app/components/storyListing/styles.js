import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../config/styles';

export default StyleSheet.create({
  contentContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  listingContainer: {
    elevation: 1,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
  },
  images: {
    height: 200,
    width: undefined,
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.listing.title,
  },
  description: {
    fontSize: 14,
    color: theme.listing.description,
  },
  metaContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  authorAvatarContainer: {
    borderRadius: 25,
    overflow: 'hidden',
    height: 50,
    width: 50,
  },
  authorAvatar: {
    height: 50,
    width: 50,
  },
  authorContainer: {
    marginLeft: 10,
    marginTop: 5,
  },
});

export const Tag = styled.Text`
  border-radius: 25px;
  color: ${theme.listing.meta};
  font-weight: bold;
  margin-right: 10px;
`;

export const TagContainer = styled.View`
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  border-right-width: 1px;
  border-right-color: ${theme.listing.meta};
`;

export const MetaContainer = styled.View`
  flex-wrap: nowrap;
  flex-direction: row;
  margin-top: 5px;
  justify-content: flex-start;
`;

export const ViewedContainer = styled.View`
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  margin-left: 10px;
`;

export const Viewed = styled.Text`
  color: ${theme.listing.meta};
  font-weight: bold;
  margin-left: 5px;
`;
