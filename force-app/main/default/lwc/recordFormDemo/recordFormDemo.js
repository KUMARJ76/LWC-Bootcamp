import { LightningElement, api } from 'lwc';
import NAME from '@salesforce/schema/Account.Name';
import RATING from '@salesforce/schema/Account.Rating';
import REVENUE from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY from '@salesforce/schema/Account.Industry';
import { NavigationMixin } from 'lightning/navigation';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecordFormDemo extends NavigationMixin(LightningElement) {
    @api recordId;
    @api objectApiName;
    fieldList = [NAME, INDUSTRY, REVENUE, RATING];

    showToast() {
        const evt = new ShowToastEvent({
            message: 'Record created Successfully!!',
            variant: 'success',
            title: 'success'
        })
        this.dispatchEvent(evt);
    }
    navigateToRecordPage(event) {
        console.log('Event Details', event.detail);
        console.log('Event Detials', JSON.stringify(event.detail));
        let pageRef = {
            type: "standard__objectPage",
            attributes: {
                recordId: event.detail.id,
                objectApiName: "Account",
                actionName: "view"
            },
        }
        this[NavigationMixin.Navigate](pageRef)
    }
}