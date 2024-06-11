import { LightningElement } from 'lwc';

export default class GrandParentComposition extends LightningElement {
    handleParentEvent() {
        console.log('Event Handled in Garent Components- at child component');
    }
}