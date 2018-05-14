import { observable } from 'mobx';
//import FableApi from '../api/FableApi';

class store {
  @observable fetched = false;
  @observable auth = {};
  @observable stories = [];

  authenticate(email, password) {
    //this.auth = FableApi.authenticate(email, password);
  };
}

export default store;
