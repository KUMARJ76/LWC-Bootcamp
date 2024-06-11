import { LightningElement, api } from 'lwc';

export default class ContactItem extends LightningElement {
    @api contact
    clickHandler(event) {
        // prevent the anchor element from navigation
        event.preventDefault();
        //1.Creation of custom event
        let selectionEvent = new CustomEvent('selection', {
            detail: this.contact.Id
        });

        //2. Dispatch the event
        this.dispatchEvent(selectionEvent);

    }
}