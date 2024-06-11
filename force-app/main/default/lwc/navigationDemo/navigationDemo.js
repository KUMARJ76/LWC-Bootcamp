import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class NavigationDemo extends NavigationMixin(LightningElement) {
    navHomeClickHandler() {
        let pageRef = {
            type: "standard__namedPage",
            attributes: {
                pageName: "home"
            }
        }
        this[NavigationMixin.Navigate](pageRef)
    }
    navAccountViewClickHandler() {
        let pageRef = {
            type: "standard__objectPage",
            attributes: {
                objectApiName: "ns__Widget__c",
                actionName: "list"
            },
            state: {
                filterName: "PlatinumandGoldSLACustomers" // api name
            }
        }
        this[NavigationMixin.Navigate](pageRef)
    }
    navCreateAccountClickHandler() {
        let pageRef = {
            type: "standard__objectPage",
            attributes: {
                objectApiName: "Account",
                actionName: "new"
            },
            // state: {
            //     defaultFieldValues = "AccountNumber=ACXXXX,CustomCheckbox__c=true,Name=Salesforce%2C%20%231%3DCRM,NumberOfEmployees=35000,OwnerId=005XXXXXXXXXXXXXXX",
            //     nooverride: "1"
            // }
        }
        this[NavigationMixin.Navigate](pageRef)
    }


    navCreateNewAccountDefaultClickHandler() {
        const defaultValues = encodeDefaultFieldValues({
            Industry: "Energy",
            Rating: "Hot",

        })

        let pageRef = {
            type: "standard__objectPage",
            attributes: {
                objectApiName: "Account",
                actionName: "new"
            },
            state: {
                defaultFieldValues: defaultValues
            }
        }
        this[NavigationMixin.Navigate](pageRef)
    }

    navEditAccountClickHandler() {
        let pageRef = {
            type: "standard__recordPage",
            attributes: {
                recordId: "001xx00000015g00001enC3kAAE3DGg0AAG",
                objectApiName: "Account",
                actionName: "edit"
            }
        }
        this[NavigationMixin.Navigate](pageRef);
    }

}