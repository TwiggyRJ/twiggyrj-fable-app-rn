import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components';

export default StyleSheet.create({
  contentContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20
  },
  listingContainer: {
    elevation: 10,
    marginBottom: 20
  },
  images: {
    height: 200,
    width: undefined
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000'
  },
  description: {
    fontSize: 14,
    color: '#000000'
  },
  metaContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  authorAvatarContainer: {
    borderRadius: 25,
    overflow: 'hidden',
    height: 50,
    width: 50
  },
  authorAvatar: {
    height: 50,
    width: 50
  },
  authorContainer: {
    marginLeft: 10,
    marginTop: 5
  }
});
