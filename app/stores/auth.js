import { observable, action } from 'mobx';
import { auth } from '../api/auth';

class AuthStore {
  @observable isLoading;
  @observable auth;

  constructor() {
    this.auth = null;
    this.isLoading = false;
  }

  @action
  authenticate(email, password) {
    this.isLoading = true;
    this.auth = {email, password};
  }
}

const authStore = new AuthStore();

export default authStore;
