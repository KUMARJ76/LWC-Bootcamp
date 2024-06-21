import { LightningElement, api } from 'lwc';
import { FlowAttributeChangeEvent } from 'lightning/flowSupport';

export default class CalculatorForFlow extends LightningElement {
    @api inputNumber1 = "";
    @api inputNumber2 = "";

    @api outputResult = "";

    clickHandler(event) {
        const name = event.target.name;
        switch(name) {
            case 'add':
                // Handle addition
                this.outputResult=Number(this.inputNumber1)+Number(this.inputNumber2);
                break;
            case 'sub':
                // Handle subtraction
                this.outputResult=Number(this.inputNumber1)-Number(this.inputNumber2);
                break;
            case 'mul':
                // Handle multiplication
                this.outputResult=Number(this.inputNumber1)*Number(this.inputNumber2);
                break;
            case 'div':
                // Handle division
                this.outputResult=Number(this.inputNumber1)/Number(this.inputNumber2);
                break;
        }
        const attributeChange = new FlowAttributeChangeEvent('outputResult', this.outputResult);
        this.dispatchEvent(attributeChange)

    }
}