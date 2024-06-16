import { LightningElement, api } from 'lwc';
import NAME from '@salesforce/schema/Account.Name';
import RATING from '@salesforce/schema/Account.Rating';
import REVENUE from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY from '@salesforce/schema/Account.Industry';

export default class RecordViewFormDemo extends LightningElement {
    @api objectApiName;
    @api recordId;
    
    fieldsObject={
        name:NAME,
        rating:RATING,
        revenue:REVENUE,
        industry:INDUSTRY
    }
}