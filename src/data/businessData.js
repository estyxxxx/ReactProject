import { observable, action, makeObservable, runInAction } from 'mobx';
import axios from 'axios';

class BusinessData {
    business = {
        name: "The perfect sound",
        address: "The Workshops 6, Herzliya",
        phone: "09-951-0318",
        owner: "Esty Elaluf",
        logo: "https://www.emojiall.com/images/240/microsoft-teams/1f49c.png",
        description: "Sounds that make dreams come true",
    };
    baseUrl = 'http://localhost:8787/businessData';
    constructor() {
        makeObservable(this, {
            business: observable,
            updateDetails: action,
            getDeails: action
        });
        this.getDeails();
    }

    getDeails() {
        axios.get(this.baseUrl).then((result) => {
            runInAction(() => {
                if (!result.data.name)
                    this.updateDetails();
                else
                    this.business = result.data;
            });
        });
    }

    updateDetails() {
        fetch(this.baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.business)
        }).then((result) => {
        }).catch(() => {
            console.error(res.status);
        });
    }
}
export default new BusinessData();