import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import { publish, MessageContext } from 'lightning/messageService';
import recordSelected from '@salesforce/messageChannel/sendContact__c';

export default class ContactList extends LightningElement {
    @wire(getContactList) contacts;
    @wire(MessageContext) messageContext;

    selectedContacts;


    selectionHandler(event) {
        let selectedId = event.detail;
        this.selectedContacts = this.contacts.data.find(currItem => currItem.Id === selectedId);

        const payload = { lmsData: this.selectedContacts };
        publish(this.messageContext, recordSelected, payload)


    }
}