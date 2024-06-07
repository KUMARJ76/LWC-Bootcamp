import { LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {

    constructor() {
        super();
        console.log('Constructor from child');
    }
    connectedCallback() {
        console.log('ConnectedCallback from Child');
        throw new Error('Error while component loading');
    }
    renderedCallback() {
        console.log('renderedCallback from Child');
    }
    errorCallback({ error, stack }) {
        console.log('errorCallback from Child');
    }
    disconnectedCallback() {
        console.log('disconnectedCallback from Child');
    }

}