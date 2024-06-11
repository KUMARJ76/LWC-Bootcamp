import { LightningElement } from 'lwc';

export default class ChildCustomEventDemo extends LightningElement {
    clickHandler() {
        //1. creation of custom event 
        let myCustomEvent=new CustomEvent("displaymessage");

        //2. dispatch the custom event
        this.dispatchEvent(myCustomEvent);

    }
}