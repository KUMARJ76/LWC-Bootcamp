import { LightningElement, wire } from 'lwc';
import getAccountsRecord from '@salesforce/apex/AccountHandler.getAccountsRecord';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';
import ACCOUNT_Object from '@salesforce/schema/Account';


export default class ImparetiveApexDemo extends LightningElement {
data=[];
options=''
columns=[
    {label:'Name',fieldName:'Name'},
    {label:'Industry',fieldName:'Industry'},
    {label:'Rating',fieldName:'Rating'}];

 selectedIndustry='';
 
 
    clickHandler(){
        getAccountsRecord({industry:this.selectedIndustry}).then((result)=>{    // parameter should be exact same "industry"
        console.log('results',result)
        this.data=result;
       }).catch(error=>{
        console.log('error',error)
       })
    }


@wire(getObjectInfo,{
    objectApiName:ACCOUNT_Object
})accountInfo;



@wire(getPicklistValues,{
    recordTypeId:'$accountInfo.data.defaultRecordTypeId',
    fieldApiName:ACCOUNT_INDUSTRY
})industryPicklist;

    handleChange(event){
        this.selectedIndustry=event.target.value;
    }
}