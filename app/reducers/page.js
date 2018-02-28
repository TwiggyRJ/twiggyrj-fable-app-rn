export const page = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PAGE_SUCCESS':
          return action.page;
    default:
          return state;
  }
};
