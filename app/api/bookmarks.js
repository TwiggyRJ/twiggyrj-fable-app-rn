import { getApi } from '../config/settings';
import bookmarksJson from '../json/bookmarks';

export function getAllBookmarks() {
  try {
    const bookmarks = bookmarksJson;
    return bookmarks;
  } catch(e) {
    console.log('error')
    throw e;
  }
}
