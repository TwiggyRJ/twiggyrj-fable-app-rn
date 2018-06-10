import { observable, action } from 'mobx';
import { getAuthor } from '../api/author';
import { getAuthorStories } from '../api/stories';

class AuthorStore {
  @observable isLoading;
  @observable author;

  constructor() {
    this.author = null;
    this.stories = null;
    this.isLoading = null;
  }

  @action
  getAuthor(author) {
    this.isLoading = true;
    this.author = getAuthor(author);
    this.isLoading = false;
  }

  @action
  getAuthorStories(author) {
    this.isLoading = true;
    this.stories = getAuthorStories(author);
    this.isLoading = false;
  }
}

export default new AuthorStore();
