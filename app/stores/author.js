import { observable, action } from 'mobx';
import { getAuthor } from '../api/author';

class AuthorStore {
  @observable isLoading;
  @observable author;

  constructor() {
    this.author = null;
    this.isLoading = null;
  }

  @action
  getAuthor(author) {
    this.isLoading = true;
    this.author = getAuthor(author);
    this.isLoading = false;
  }
}

export default new AuthorStore();
