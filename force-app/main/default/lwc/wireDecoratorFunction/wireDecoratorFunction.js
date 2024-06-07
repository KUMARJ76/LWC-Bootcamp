import { LightningElement, wire } from 'lwc';
import getAccountData from '@salesforce/apex/AccountHandler.getAccounts';

const columns = [
    { label: "Account Name", fieldName: "Name" },
    { label: "Account Rating", fieldName: "Rating" },
    { label: "Account Industry", fieldName: "Industry" }
];

export default class WireDecoratorFunction extends LightningElement {
    columns = columns;
    accounts;
    error;
    @wire(getAccountData) accounts({ data, error }) {
        if (data) {
            console.log(data);
            // Create an updated array of account objects
            let updatedAccount = data.map(currentItem => {
                let updatedObject = {};
                // Check if 'Rating' property is missing
                if (!currentItem.hasOwnProperty('Rating')) {
                    // Add default 'Rating' value and copy other properties
                    updatedObject = { ...currentItem, Rating: 'Warm' };
                }
                if (!currentItem.hasOwnProperty('Industry')) {
                    updatedObject = { ...currentItem, Industry: 'Media' };
                }
                else {
                    // Copy the original object if 'Industry' exists
                    updatedObject = { ...currentItem };
                }
                return updatedObject;
            });
            this.accounts = [...updatedAccount]
            this.error = null;
            console.log('Updated Account', updatedAccount);
        } else if (error) {
            console.log(error);
            this.error = error;
            this.accounts = accounts
        }
    };

}