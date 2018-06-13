import { observable, action } from 'mobx';
import { getAllStories, getLandingStories } from '../api/stories';

class StoriesStore {
  @observable isLoading;
  @observable stories;

  constructor() {
    this.stories = null;
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
  getLandingStories() {
    this.isLoading = true;
    this.stories = getLandingStories();
    this.isLoading = false;
  }
}

export default new StoriesStore();
