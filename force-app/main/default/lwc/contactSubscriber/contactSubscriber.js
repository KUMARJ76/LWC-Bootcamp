import { LightningElement, wire } from 'lwc';
import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext,
} from 'lightning/messageService';
import recordSelected from '@salesforce/messageChannel/sendContact__c';

export default class ContactSubscriber extends LightningElement {
    @wire(MessageContext) messageContext;
    subscription = null;
    selectedContacts = "";

    // Handler for message received by component
    handleMessage(message) {
        this.selectedContacts = message.lmsData;
    }

    // Encapsulate logic for Lightning message service subscribe and unsubsubscribe
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                recordSelected,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }



    connectedCallback() {
        this.subscribeToMessageChannel();
    }
    disconnectedCallBack() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}