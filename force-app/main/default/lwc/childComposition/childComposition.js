import { LightningElement } from 'lwc';

export default class ChildComposition extends LightningElement {
    clickHandler() {
        let myCustomEvent = new CustomEvent("fire", { bubbles: false, composed: true });
        this.dispatchEvent(myCustomEvent)
    }
}