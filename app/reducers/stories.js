export const stories = (state = [], action) => {
  switch (action.type) {
    case 'GET_STORIES_SUCCESS':
          return action.stories;
    default:
          return state;
  }
};
