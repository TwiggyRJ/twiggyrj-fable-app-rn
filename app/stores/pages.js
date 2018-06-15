import { observable, action } from 'mobx';
import { getPage } from '../api/pages';

class PagesStore {
  @observable isLoading;
  @observable pages;

  constructor() {
    this.page = null;
    this.isLoading = null;
  }

  @action
  getPage(pageId) {
    this.isLoading = true;
    this.page = getPage(pageId);
    this.isLoading = false;
  }
}

export default new PagesStore();
