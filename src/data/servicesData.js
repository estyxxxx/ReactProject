import { observable, action, makeObservable, runInAction } from 'mobx';
import axios from 'axios';

class ServicesData {

  services = [];

  baseUrl = 'http://localhost:8787/service';
  constructor() {
    makeObservable(this, {
      services: observable,
      getServices: action,
      addService: action
    });
    this.getServices();
  }

  getServices() {
    axios.get(`${this.baseUrl}s`).then((result) => {
      runInAction(() => {
        this.services = result.data;
      });
    });
  }

  addService(service, SetCanAdd, setAddService) {
    SetCanAdd(true);
    fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(service)
    }).then((result) => {
      runInAction(() => {
        if (result.status == 400)
          SetCanAdd(false);
        else {
          this.services.push(service);
          setAddService(false);
        }
      })
    }).catch(() =>
      console.error(res.status)
    );
  }
}
export default new ServicesData();