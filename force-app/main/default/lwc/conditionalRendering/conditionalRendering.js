import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    displayMessage = false;
    changeHandler(event) {
        // event.target.value;
        // toggleHandling
        this.displayMessage = !this.displayMessage;
    }
}