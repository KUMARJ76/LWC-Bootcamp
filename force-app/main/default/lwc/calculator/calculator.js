import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
   numberOne = "";
   numberTwo = "";
   result = 0;
   showResult = false


   changeHandler(event) {
      event.preventDefault();
      // this.numberOne = event.target.value;
      // console.log("this.numberOne", this.numberOne);
      // let name = event.target.name;
      // let value = event.target.value;

      let { name, value } = event.target;
      if (name === "numberOne") {
         this.numberOne = value;
      } else if (name === "numberTwo") {
         this.numberTwo = value;
      }
   }
   // changeHandlerNumberTwo(event) {
   //    event.preventDefault();
   //    this.numberTwo = event.target.value;
   //    console.log("this.numberOne", this.numberTwo);

   // }


   calculate(event) {
      this.showResult = true;
      let labelElement = event.target.label;
      if (labelElement === "Add") {
         this.result = this.result = parseFloat(this.numberOne) + parseFloat(this.numberTwo)
      } else if (labelElement === "Sub") {
         this.result = this.result = parseFloat(this.numberOne) - parseFloat(this.numberTwo);

      } else if (labelElement === "Mul") {
         this.result = this.result = parseFloat(this.numberOne) * parseFloat(this.numberTwo);

      } else if (labelElement === "Div") {
         this.result = this.result = parseFloat(this.numberOne) / parseFloat(this.numberTwo);

      }
      //reset
      this.numberOne = "";
      this.numberTwo = "";
   }


   // addHandler(event) {
   //    this.result = this.result = parseFloat(this.numberOne) + parseFloat(this.numberTwo);
   // }
   // subHandler(event) {
   //    this.result = this.result = parsFloat(this.numberOne) - parseFloat(this.numberTwo);
   // }
   // mulHandler(event) {
   //    this.result = this.result = parseFloat(this.numberOne) * parseFloat(this.numberTwo);
   // }
   // divHandler(event) {
   //    this.result = this.result = parseFloat(this.numberOne) / parseFloat(this.numberTwo);
   // }
}