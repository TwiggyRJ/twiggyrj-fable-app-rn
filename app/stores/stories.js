import { observable, action } from 'mobx';
import { getAllStories, getAuthorStories } from '../api/stories';

class StoriesStore {
  @observable isLoading;
  @observable stories;

  constructor() {
    this.stories = getAllStories();
    this.isLoading = null;
  }

  @action
  getAll() {
    this.isLoading = true;
    //console.log(getAllStories())
    this.stories = getAllStories();
    this.isLoading = false;
  }

  @action
  getAuthorStories(author) {
    this.isLoading = true;
    this.stories = getAuthorStories(author);
    this.isLoading = false;
  }
}

export default new StoriesStore();
