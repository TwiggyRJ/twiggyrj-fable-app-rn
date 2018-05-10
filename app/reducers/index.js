import { combineReducers } from 'redux';
import { stories } from './stories';
import { story } from './story';
import { page } from './page';
import { users } from './users';
import { auth } from './auth';

export default combineReducers({
  auth,
  users,
  stories,
  story,
  page,
});
