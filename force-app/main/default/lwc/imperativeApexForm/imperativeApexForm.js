import { LightningElement, api, wire } from 'lwc';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import TICKET_SYMBOL from '@salesforce/schema/Account.TickerSymbol';
import { getFieldValue, getRecord,notifyRecordUpdateAvailable } from 'lightning/uiRecordApi';
import updateTicker from '@salesforce/apex/AccountHandler.updateTicker';


export default class ImperativeApexForm extends LightningElement {
    @api recordId;
    accname;
    accTicket = "";


    @wire(getRecord, {
        recordId: "$recordId",
        fields: [ACCOUNT_NAME, TICKET_SYMBOL]
    }) outputFunction({ data, error }) {
        if (data) {
            console.log('Get Records from Account', data);
            this.accname = getFieldValue(data, ACCOUNT_NAME);
            this.accTicket = getFieldValue(data, TICKET_SYMBOL);
           

        } else if (error) {
            console.log('Error ', error);
        }
    }


    changeHandler(event) {
        this.accTicket = event.target.value;
    }

    updateTicket(event) {
        updateTicker({recordId:this.recordId, newTicker:this.accTicket}).then((result)=>{
            console.log('Record updated successfully',result);
            notifyRecordUpdateAvailable([{recordId:this.recordId}])
        }).catch(error=>console.log(error))

    }
    
}