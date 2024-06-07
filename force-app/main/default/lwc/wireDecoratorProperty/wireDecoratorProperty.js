import { LightningElement, wire } from 'lwc';
import getAccountData from '@salesforce/apex/AccountHandler.getAccounts';

const columns = [
    { label: "Account Name", fieldName: "Name" },
    { label: "Account Rating", fieldName: "Rating" },
    { label: "Account Industry", fieldName: "Industry" }
];

export default class WireDecoratorProperty extends LightningElement {
    columns = columns
    @wire(getAccountData) accounts;
    // accounts.data
    // accounts.error
}
