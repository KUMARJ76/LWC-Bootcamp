import { LightningElement } from 'lwc';

export default class ParentCustomEventDemo extends LightningElement {
    displayMessage = false;
    displaymessageHandler(event) {
        this.displayMessage = true;
    }
}