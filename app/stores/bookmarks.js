import { observable, action } from 'mobx';
import { getAllBookmarks } from '../api/bookmarks';

class BookmarksStore {
  @observable isLoading;
  @observable bookmarks;

  constructor() {
    this.bookmarks = getAllBookmarks();
    this.isLoading = null;
  }

  @action
  getAll() {
    this.isLoading = true;
    this.bookmarks = getAllBookmarks();
    this.isLoading = false;
  }
}

export default new BookmarksStore();
