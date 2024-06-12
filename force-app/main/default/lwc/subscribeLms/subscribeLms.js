import { LightningElement, wire } from 'lwc';
import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext,
} from 'lightning/messageService';
import recordSelected from '@salesforce/messageChannel/sendMessage__c';

export default class SubscribeLms extends LightningElement {
    subscription = null;
    messageData = '';
    @wire(MessageContext) messageContext;


    // Handler for message received by component
    handleMessage(message) {
        this.messageData = message.lmsData;
    }
    handleUnPublishMessage(message) {
        this.messageData = message.lmsData;
    }

    subscriptionMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                recordSelected,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    subscriptionOfMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                recordSelected,
                (message) => this.handleUnPublishMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }
    // Standard lifecycle hooks used to subscribe and unsubsubscribe to the message channel
    connectedCallback() {
        this.subscriptionMessageChannel();
        this.subscriptionOfMessageChannel();
    }
    disconnectedCallback() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}