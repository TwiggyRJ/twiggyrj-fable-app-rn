import { GET_STORY } from './actions';

export function getStory(stories, id) {
  let story = {
    action: 'get',
    data: stories,
    id
  };
  
  return {
    type: GET_STORY, story
  }
}