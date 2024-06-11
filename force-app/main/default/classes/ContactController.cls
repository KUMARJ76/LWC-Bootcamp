public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        try {
            List<Contact>conList=[SELECT Id,Name,FirstName,LastName,Title,Phone,Email,PhotoUrl__c FROM Contact WHERE PhotoUrl__c!=null WITH USER_MODE LIMIT 10];
            return conList;  
        }
        catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
       
    }
}