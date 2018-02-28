export const auth = (state = [], action) => {
  switch (action.type) {
    case 'AUTHENICATE_SUCCESS':
          return action.auth;
    default:
          return state;
  }
};
