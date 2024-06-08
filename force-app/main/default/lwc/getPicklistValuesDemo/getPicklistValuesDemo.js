import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';

export default class GetPicklistValuesDemo extends LightningElement {
    @wire(getObjectInfo, {
        objectApiName: ACCOUNT_OBJECT
    }) accountProp;

    @wire(getPicklistValues, {
        recordTypeId: '$accountProp.data.defaultRecordTypeId',
        fieldApiName: ACCOUNT_INDUSTRY,
    }) outputFunction({ data, error }) {
        if (data) {
            console.log(' getPicklist', data)
        } else if (error) {
            console.log('Error getPicklist', error);
        }

    }
}