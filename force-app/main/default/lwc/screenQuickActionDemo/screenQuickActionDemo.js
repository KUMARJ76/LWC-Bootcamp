import { LightningElement, api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class ScreenQuickActionDemo extends LightningElement {
    @api recordId;
    @api objectApiName = ACCOUNT_OBJECT;

    fields = {
        name:ACCOUNT_NAME,
        industry:ACCOUNT_INDUSTRY
    }

    closeModal() {
        this.dispatchEvent(new CloseActionScreenEvent());
    }

    successHandler() {
        const event = new ShowToastEvent({
            title: 'Success',
            message: 'Record is saved successfully.',
            variant: 'success'
        });
        this.dispatchEvent(event);
        this.dispatchEvent(new CloseActionScreenEvent());
    }
}
