import { getApi } from '../config/settings';

export function getAuthor(author) {
  try {
    const authorData = {
      'id': 2,
      'firstname': 'Serene',
      'lastname': 'Andrade',
      'avatar': 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/31408136_10214186196906969_7459980734246158336_n.jpg?_nc_cat=0&oh=27a844cf4be1d64d4f7b7acf5cc44701&oe=5B7BBD5E',
    };
    return authorData;
  } catch(e) {
    console.log('error')
    throw e;
  }
}
