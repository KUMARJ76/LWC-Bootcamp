public with sharing class AccountHandler {
   @AuraEnabled(cacheable=true)
   public static List<Account> getAccounts(){
    try {
        //return [select Id,Name,Rating,Industry from Account With SECURITY_ENFORCED];
        return [select Id,Name,Rating,Industry from Account ];
       // System.debug('Hi');
        
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
   }

   @AuraEnabled(cacheable=true)
   public static List<Account> getParentAccounts(){
    try {
        return [select Id,Name,Industry from Account where AnnualRevenue!=null with USER_MODE];
        
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
   }

   @AuraEnabled
   public static List<Account> getAccountsRecord(String industry){
    try {
        //return [select Id,Name,Rating,Industry from Account With SECURITY_ENFORCED];
        return [select Id,Name,Rating,Industry from Account  where Industry=:industry with USER_MODE];
       // System.debug('Hi');
        
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
   }

   @AuraEnabled
   public static String updateTicker(String recordId,String newTicker){
    Account acc=new Account(Id=recordId,TickerSymbol=newTicker);
    try {
       update acc;
       return 'Success';
        
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
   }
}