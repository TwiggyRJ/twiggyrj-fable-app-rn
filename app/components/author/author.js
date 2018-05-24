import React from 'react';
import PropTypes from 'prop-types';
import { AuthorContainer, AuthorAvatar, AuthorAvatarContainer, AuthorName, TextContainer } from './styles';

const propTypes = {
  author: PropTypes.string.isRequired,
  avatar: PropTypes.shape({
    src: PropTypes.string,
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }),
  component: PropTypes.element,
  customStyles: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {
  author: 'Patrick O\'Leary',
  avatar: {
    src: null,
    height: 50,
    width: 50,
  },
  color: '#000000',
  size: 16,
};

const Author = (props) => {
  const { author, avatar, customStyles, component, color, size } = props;
  return (
    <AuthorContainer styling={customStyles}>
      {
        avatar.src ?
          <AuthorAvatarContainer height={avatar.height} width={avatar.width}>
            <AuthorAvatar source={{ uri: avatar.src }} height={avatar.height} width={avatar.width} />
          </AuthorAvatarContainer>
        : null
      }
      <TextContainer avatar={avatar.src}>
        <AuthorName color={color} size={size}>{author}</AuthorName>
        { component }
      </TextContainer>
    </AuthorContainer>
  );
};

Author.propTypes = propTypes;
Author.defaultProps = defaultProps;

export default Author;
