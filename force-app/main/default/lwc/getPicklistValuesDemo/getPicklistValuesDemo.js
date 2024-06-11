import { getObjectInfo, getPicklistValues, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';

export default class GetPicklistValuesDemo extends LightningElement {
    value;
    @wire(getObjectInfo, {
        objectApiName: ACCOUNT_OBJECT
    }) accountProp;

    @wire(getPicklistValues, {
        recordTypeId: '$accountProp.data.defaultRecordTypeId',
        fieldApiName: ACCOUNT_INDUSTRY,
    }) industryPiclist;


    @wire(getPicklistValuesByRecordType, {
        objectApiName: ACCOUNT_OBJECT,
        recordTypeId: '$accountProp.data.defaultRecordTypeId',
    }) accountInfoFunction; /*({ data, error }) {
        if (data) {
            console.log('defaultPick', data);
        } else if (error) {
            console.log('defaultError', error);
        }
    };*/




    handleChange(event) {
        this.value = event.target.value;
    }
}