export const users = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER_SUCCESS':
          return action.users;
    default:
          return state;
  }
};
