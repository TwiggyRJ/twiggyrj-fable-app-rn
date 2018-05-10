export const story = (state = [], action) => {
  switch (action.type) {
    case 'GET_STORY_SUCCESS':
      return action.story;
    default:
      return state;
  }
};
