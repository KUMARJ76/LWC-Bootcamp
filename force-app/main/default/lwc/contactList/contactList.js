import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class ContactList extends LightningElement {
    @wire(getContactList) contacts;
    selectedContacts;
    selectionHandler(event) {
        let selectedId = event.detail;
        this.selectedContacts = this.contacts.data.find(currItem => currItem.Id === selectedId);
    }
}