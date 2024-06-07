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
}