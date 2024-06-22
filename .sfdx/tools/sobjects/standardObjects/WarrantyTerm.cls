// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class WarrantyTerm {
    global Id Id;
    global SObject Owner;
    global Id OwnerId;
    global Boolean IsDeleted;
    global String WarrantyTermName;
    global Datetime CreatedDate;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime LastModifiedDate;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime SystemModstamp;
    global Datetime LastViewedDate;
    global Datetime LastReferencedDate;
    global Pricebook2 Pricebook2;
    global Id Pricebook2Id;
    global String Code;
    global String WarrantyType;
    global Boolean IsActive;
    global String Description;
    global Integer WarrantyDuration;
    global String WarrantyUnitOfTime;
    global String Exclusions;
    global String EffectiveStartDate;
    global Double LaborCovered;
    global Integer LaborCoveredDuration;
    global String LaborCoveredUnitOfTime;
    global Double PartsCovered;
    global Integer PartsCoveredDuration;
    global String PartsCoveredUnitOfTime;
    global Double ExpensesCovered;
    global Integer ExpensesCoveredDuration;
    global String ExpensesCoveredUnitOfTime;
    global String ExchangeType;
    global Boolean IsTransferable;
    global List<ActivityHistory> ActivityHistories;
    global List<AssetWarranty> AssetWarrantyTerms;
    global List<AttachedContentDocument> AttachedContentDocuments;
    global List<Attachment> Attachments;
    global List<CombinedAttachment> CombinedAttachments;
    global List<ContentDocumentLink> ContentDocumentLinks;
    global List<EmailMessage> Emails;
    global List<EntitySubscription> FeedSubscriptionsForEntity;
    global List<Event> Events;
    global List<FlowOrchestrationWorkItem> FlowOrchestrationWorkItems;
    global List<Note> Notes;
    global List<NoteAndAttachment> NotesAndAttachments;
    global List<OpenActivity> OpenActivities;
    global List<ProcessInstance> ProcessInstances;
    global List<ProcessInstanceHistory> ProcessSteps;
    global List<ProductWarrantyTerm> ProductWarrantyTerms;
    global List<Task> Tasks;
    global List<TopicAssignment> TopicAssignments;
    global List<WarrantyTermFeed> Feeds;
    global List<WarrantyTermHistory> Histories;
    global List<WarrantyTermShare> Shares;
    global List<AIInsightValue> SobjectLookupValue;
    global List<AIRecordInsight> Target;
    global List<AssetWarrantyChangeEvent> WarrantyTerm;
    global List<ContentDocumentLinkChangeEvent> LinkedEntity;
    global List<ContentVersion> FirstPublishLocation;
    global List<EmailMessageChangeEvent> RelatedTo;
    global List<EventChangeEvent> What;
    global List<EventRelationChangeEvent> Relation;
    global List<FeedComment> Parent;
    global List<FlowExecutionErrorEvent> ContextRecord;
    global List<FlowRecordRelation> RelatedRecord;
    global List<OutgoingEmail> RelatedTo;
    global List<ProcessInstanceChangeEvent> TargetObject;
    global List<TaskChangeEvent> What;

    global WarrantyTerm () 
    {
    }
}