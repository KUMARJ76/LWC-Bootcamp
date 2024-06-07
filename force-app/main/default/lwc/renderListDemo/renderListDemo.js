import { LightningElement } from 'lwc';

export default class RenderListDemo extends LightningElement {
    superStars = ["Spiderman", "SuperMan", "Batman", "Ironman"];
    contactList = [{
        id: 1,
        fname: "Jeet",
        lname: "Kr"
    }, {
        id: 2,
        fname: 'Joe',
        lname: 'doe'
    }, {
        id: 3,
        fname: 'John',
        lname: 'snow',
        detail: {
            age: 35,
            pin: 843108
        }
    }]
}