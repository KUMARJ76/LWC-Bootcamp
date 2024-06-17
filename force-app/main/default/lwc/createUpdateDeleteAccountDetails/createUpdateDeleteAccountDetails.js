import { LightningElement, wire } from 'lwc';
import getParentAccounts from '@salesforce/apex/AccountHandler.getParentAccounts';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_SLA from '@salesforce/schema/Account.SLA__c';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_SLAExpirationDate from '@salesforce/schema/Account.SLAExpirationDate__c';
import ACCOUNT_Parent from '@salesforce/schema/Account.ParentId';
import ACCOUNT_NumberOfLocation from '@salesforce/schema/Account.NumberofLocations__c';
import ACCOUNT_DESC from '@salesforce/schema/Account.Description';
import { createRecord } from 'lightning/uiRecordApi';

export default class CreateUpdateDeleteAccountDetails extends LightningElement {
    numberOfLocation = '1';
    parentOptions = [];
    selParentAcc = "";
    selAccount = "";
    selSLAExpDate = null;
    selSlaType = "";
    selNoOfLocation = "";
    selDescription = "";

    formats = [
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'list',
        'indent',
        'align',
        'link',
        'image',
        'clean',
        'table',
        'header',
        'color',
    ];

    @wire(getParentAccounts)
    wired_parentAccounts({ data, error }) {
        this.parentOptions = [];
        if (data) {
            this.parentOptions = data.map((currItem) => ({
                label: currItem.Name,
                value: currItem.Id
            }));
            console.log('parent', this.parentOptions);
        } else if (error) {
            console.log('Error while getting the records', error);
        }
    }

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    accountObjectInfo;

    @wire(getPicklistValues, {
        recordTypeId: '$accountObjectInfo.data.defaultRecordTypeId',
        fieldApiName: ACCOUNT_SLA
    })
    slaPicklist;

    saveRecord() {
        // Save logic here
        console.log('ACCOUNT_OBJECT', ACCOUNT_OBJECT);
        if (this.validateInput()) {
            let inputFields = {};
            inputFields[ACCOUNT_NAME.fieldApiName] = this.selAccount;
            inputFields[ACCOUNT_Parent.fieldApiName] = this.selParentAcc;
            inputFields[ACCOUNT_SLA.fieldApiName] = this.selSlaType;
            inputFields[ACCOUNT_DESC.fieldApiName] = this.selDescription;
            inputFields[ACCOUNT_NumberOfLocation.fieldApiName] = this.selNoOfLocation;
            inputFields[ACCOUNT_SLAExpirationDate.fieldApiName] = this.selSLAExpDate;

            let recordInput = {
                apiName: ACCOUNT_OBJECT.objectApiName,
                fields: inputFields
            };
            createRecord(recordInput).then((result) => {
                console.log('Account created successfully', result);
            }).catch(error => console.log(error));
        } else {
            console.log("Inputs are not valid");
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        if (name === 'parentAcc') {
            this.selParentAcc = value;
        } else if (name === 'accname') {
            this.selAccount = value;
        } else if (name === 'slaexpdt') {
            this.selSLAExpDate = value;
            console.log(`name: ${name}, value: ${value}`);
        } else if (name === 'slaType') {
            this.selSlaType = value;
        } else if (name === 'numOfLocation') {
            this.selNoOfLocation = value;
        } else if (name === 'description') {
            this.selDescription = value;
        }
    }

    validateInput() {
        let fields = Array.from(this.template.querySelectorAll(".validateName"));
        let isValid = fields.every((currItem) => currItem.checkValidity());
        return isValid;
    }
}
