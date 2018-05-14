import { observable, action } from 'mobx';
//import * as api from '../api/auth';

class Auth {
  @observable isLoading;
  @observable auth;

  constructor() {
    this.auth = null;
    this.isLoading = false;
  }

  @action authenticate(email, password) {
    this.isLoading = true;
    this.auth = {email, password};
  }
}

const auth = new Auth();

export default auth;
export { Auth };
