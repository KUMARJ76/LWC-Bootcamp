// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class ContractLineOutcome {
    global Id Id;
    global SObject Owner;
    global Id OwnerId;
    global Boolean IsDeleted;
    global String Name;
    global Datetime CreatedDate;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime LastModifiedDate;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime SystemModstamp;
    global Datetime LastViewedDate;
    global Datetime LastReferencedDate;
    global ServiceContract ServiceContract;
    global Id ServiceContractId;
    global ContractLineItem ContractLineItem;
    global Id ContractLineItemId;
    global Datetime StartDate;
    global Datetime EndDate;
    global String Description;
    global String CaptureFrequency;
    global String CalculationMethod;
    global RecordsetFilterCriteria RecordsetFilterCriteria;
    global Id RecordsetFilterCriteriaId;
    /* Select a status:

        Compliant–The outcome is compliant with the contract. 

        Not Compliant–The outcome isn’t compliant with the contract. 

        Not Available–The outcome’s compliance information isn’t available yet. 

        Invalid–The outcome isn’t valid because the option selected for the Criteria Field of the recordset filter criteria was deleted. To restart the calculation, create a new contract line outcome.
    */
    global String ComplianceStatus;
    global Datetime NextDataCaptureDate;
    global List<AttachedContentDocument> AttachedContentDocuments;
    global List<Attachment> Attachments;
    global List<CombinedAttachment> CombinedAttachments;
    global List<ContentDocumentLink> ContentDocumentLinks;
    global List<ContractLineOutcomeData> OutcomeCaptures;
    global List<ContractLineOutcomeFeed> Feeds;
    global List<ContractLineOutcomeHistory> Histories;
    global List<ContractLineOutcomeShare> Shares;
    global List<EntitySubscription> FeedSubscriptionsForEntity;
    global List<FlowOrchestrationWorkItem> FlowOrchestrationWorkItems;
    global List<Note> Notes;
    global List<NoteAndAttachment> NotesAndAttachments;
    global List<ProcessInstance> ProcessInstances;
    global List<ProcessInstanceHistory> ProcessSteps;
    global List<AIInsightValue> SobjectLookupValue;
    global List<AIRecordInsight> Target;
    global List<ContentDocumentLinkChangeEvent> LinkedEntity;
    global List<ContentVersion> FirstPublishLocation;
    global List<ContractLineOutcomeDataChangeEvent> ContractLineOutcome;
    global List<FeedComment> Parent;
    global List<FlowExecutionErrorEvent> ContextRecord;
    global List<FlowRecordRelation> RelatedRecord;
    global List<ProcessInstanceChangeEvent> TargetObject;

    global ContractLineOutcome () 
    {
    }
}