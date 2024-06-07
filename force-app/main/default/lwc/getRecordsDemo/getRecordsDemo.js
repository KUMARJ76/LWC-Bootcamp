import { LightningElement, wire } from 'lwc';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import CONTACT_NAME from '@salesforce/schema/Contact.Name';
import { getRecords } from 'lightning/uiRecordApi';

export default class GetRecordsDemo extends LightningElement {
    outputs;
    error;
    @wire(getRecords, {
        records: [
            {
                recordIds: ['001J1000002RbONIA0'],
                fields: [ACCOUNT_NAME]
            }, {
                recordIds: ['0035g00001E9AUlAAN'],
                fields: [CONTACT_NAME]
            }
        ]
    }) outputFunction({ data, error }) {
        if (data) {
            console.log("data", data);
            this.outputs = data;
            this.error = null;
        } else if (error) {
            console.log("Error", error)
            this.outputs = null;
            this.error = error;
        }
    }
}