import { LightningElement, api } from 'lwc';
import NAME from '@salesforce/schema/Account.Name';
import RATING from '@salesforce/schema/Account.Rating';
import REVENUE from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY from '@salesforce/schema/Account.Industry';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Day33RecordEditForm extends NavigationMixin(LightningElement) {
    @api recordId;
    @api objectApiName;
    fields = {
        name: NAME,
        rating: RATING,
        revenue: REVENUE,
        industry: INDUSTRY
    }
    
    successHandler(event) {
        let pageRef = {
            type: "standard__objectPage",
            attributes: {
                recordId: event.detail.id,
                objectApiName: this.objectApiName,
                actionName: "view"
            },
        }
        this[NavigationMixin.Navigate](pageRef)
    }

    errorHandler(event) {
        const evt = new ShowToastEvent({
            message: event.detail.message,
            variant: 'error',
            title: 'Help '
        })
        this.dispatchEvent(evt);
    }

    submitHandler(event) {
        event.preventDefault();
        const fields = event.detail.fields;
        if (!fields.Industry) {
            fields.Industry = 'Banking';
        }
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }

    clickHandler() {
        let inputFields = this.template.querySelectorAll('lightning-input-field');
        inputFields.forEach((currItem) => currItem.reset());
    }
}
