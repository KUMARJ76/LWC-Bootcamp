import { LightningElement } from 'lwc';

export default class ParentComposition extends LightningElement {
    handleChildFire() {
        console.log('Event Handled in Parent Components- at child component');
    }
    handleDivFire() {
        console.log('Event Handled in Parent Components- at div component');
    }
}