import { LightningElement,api } from 'lwc';
import {FlowAttributeChangeEvent} from 'lightning/flowSupport';
export default class InputFormFlow extends LightningElement {
    @api inputVal;
    changeHandler(event) {
        this.inputVal = event.target.value;
         const attributeChange= new FlowAttributeChangeEvent("inputVal",this.inputVal);
         this.dispatchEvent(attributeChange)
    }
}