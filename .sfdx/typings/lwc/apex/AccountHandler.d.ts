declare module "@salesforce/apex/AccountHandler.getAccounts" {
  export default function getAccounts(): Promise<any>;
}
declare module "@salesforce/apex/AccountHandler.getParentAccounts" {
  export default function getParentAccounts(): Promise<any>;
}
declare module "@salesforce/apex/AccountHandler.getAccountsRecord" {
  export default function getAccountsRecord(param: {industry: any}): Promise<any>;
}
declare module "@salesforce/apex/AccountHandler.updateTicker" {
  export default function updateTicker(param: {recordId: any, newTicker: any}): Promise<any>;
}
