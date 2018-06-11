import { getApi } from '../config/settings';

export function auth(username, password) {
  try {
    const authData = {
      'id': 3,
      'firstname': 'Aaron',
      'lastname': 'Fryer',
      'following': 16,
      'followers': 20,
      'avatar': 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/23916021_10155128635868994_2293259360887463363_n.jpg?_nc_cat=0&oh=9665ea2b01f7ce2b9b38b294c859267c&oe=5B7F56B9',
    };
    return authData;
  } catch(e) {
    console.log('error')
    throw e;
  }
}
