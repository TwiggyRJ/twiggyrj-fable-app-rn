import { GET_STORIES } from './actions';

export function getStories() {
  let stories = 'get';
  return {
    type: GET_STORIES, stories
  }
}