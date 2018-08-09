import { observable, action } from 'mobx';
import { getAllStories, getLandingStories } from '../api/stories';

class StoryStore {
  @observable isLoading;
  @observable stories;
  @observable saveData;

  constructor() {
    this.story = null;
    this.isLoading = null;
  }

  @action
  storySelected(story) {
    this.story = story;
    this.isLoading = false;
  }

  @action
  saveProgress(data) {
    this.isLoading = true;
    this.saveData = data;
    this.isLoading = false;
  }
}

export default new StoryStore();
