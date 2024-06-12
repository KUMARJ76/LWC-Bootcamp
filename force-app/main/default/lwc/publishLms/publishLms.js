import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import recordSelected from '@salesforce/messageChannel/sendMessage__c';

export default class PublishLms extends LightningElement {
    @wire(MessageContext) messageContext;

    publishMessage() {
        const payload = { lmsData: 'Welcome to Tech Journey as Ankit Jain' }
        publish(this.messageContext, recordSelected, payload)
    }

    UnpublishMessage() {
        const payload = { lmsData: '' }
        publish(this.messageContext, recordSelected, payload)
    }
}