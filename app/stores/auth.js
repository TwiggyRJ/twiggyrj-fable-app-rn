import { observable, action } from 'mobx';
import { auth } from '../api/auth';

class AuthStore {
  @observable isLoading;
  @observable auth;

  constructor() {
    this.auth = null;
    this.isLoading = null;
  }

  @action
  authenticate(email, password) {
    this.isLoading = true;
    this.auth = auth({ email, password });
    this.isLoading = false;
  }
}

export default new AuthStore();
