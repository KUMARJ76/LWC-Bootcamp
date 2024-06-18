import { LightningElement, wire } from 'lwc';
import LOGO from '@salesforce/resourceUrl/logo'
import ASSERT_LOGO from '@salesforce/contentAssetUrl/salesforce_logo'
import GREETING from '@salesforce/label/c.greeting';
import SALESFORCE_PLATFORM from '@salesforce/label/c.salesforcePlatform';
import User_Id from '@salesforce/user/Id';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import NAME from '@salesforce/schema/user.Name';
import DISPLAY_TEXT_PERMISSION from '@salesforce/customPermission/displayText';
import { loadStyle,loadScript } from 'lightning/platformResourceLoader';
import Animate from '@salesforce/resourceUrl/ThirdPartyCss'
import MOMENT from '@salesforce/resourceUrl/ThirdPartyJs'
export default class StaticResourceDemo extends LightningElement {
    myLogo = LOGO;
    assetLogo = ASSERT_LOGO;
    label = {
        greeting: GREETING,
        salesforcePlatform: SALESFORCE_PLATFORM
    }
    userName = "";
    isFirstLoad = true;
    displayDate="";
    @wire(getRecord, {
        recordId: User_Id,
        fields: NAME
    }) userDetails({ data, error }) {
        if (data) {
            console.log('User details', data);
            this.userName = getFieldValue(data, NAME)
        }

        else if (error) {
            console.log('User details error', error);
        }

    }
    get checkPermission() {
        return DISPLAY_TEXT_PERMISSION;
    }


    renderedCallback() {
        if (this.isFirstLoad) {
            this.isFirstLoad=false;
            Promise.all([                         // promise.all will require if you are loading more than one
              loadStyle(this,Animate),
            //])
            
            loadScript(this,MOMENT)
            ]).then(()=>{
                console.log('animated successfully ')
                this.fetchDate();
            }).catch(error=>{
                console.log('Error in loading',error)
            })
        }

    }
    fetchDate(){
       this.displayDate= moment().add(1, 'days').calendar();
    }
}