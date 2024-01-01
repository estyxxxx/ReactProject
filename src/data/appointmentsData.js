import { observable, action, makeObservable, runInAction } from 'mobx';
import axios from 'axios';

class AppointmentsData {

  appointments = [];

  baseUrl = 'http://localhost:8787/appointment';
  constructor() {
    makeObservable(this, {
      appointments: observable,
      getAppointments: action,
      addAppointment: action
    });
    this.getAppointments();
  }

  getAppointments() {
    axios.get(`${this.baseUrl}s`).then((result) => {
      runInAction(() => {
        this.appointments = result.data;
        this.appointments.sort((x, y) => new Date(x.dateTime) - new Date(y.dateTime));
      });
    });
  }

  addAppointment(appointment, SetCanAdd, SetAddAppointment) {
    fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointment)
    }).then((result) => {
      runInAction(() => {
        if (result.status == 400)
          SetCanAdd(false);
        else {
          SetAddAppointment(false);
          this.appointments.push(appointment);
        }
      });
    }).catch(() =>
      console.error(res.status));
  }
}
export default new AppointmentsData();