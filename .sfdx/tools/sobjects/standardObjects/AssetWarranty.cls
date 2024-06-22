// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class AssetWarranty {
    global Id Id;
    global Boolean IsDeleted;
    global String AssetWarrantyNumber;
    global Datetime CreatedDate;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime LastModifiedDate;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime SystemModstamp;
    global Datetime LastViewedDate;
    global Datetime LastReferencedDate;
    global Asset Asset;
    global Id AssetId;
    global Pricebook2 Pricebook2;
    global Id Pricebook2Id;
    global WarrantyTerm WarrantyTerm;
    global Id WarrantyTermId;
    global Date StartDate;
    global Date EndDate;
    global Double PartsCovered;
    global Date PartsCoveredEndDate;
    global Double LaborCovered;
    global Date LaborCoveredEndDate;
    global Double ExpensesCovered;
    global Date ExpensesCoveredEndDate;
    global String Exclusions;
    global String ExchangeType;
    global Boolean IsTransferable;
    global String WarrantyType;
    global List<ActivityHistory> ActivityHistories;
    global List<AssetWarrantyFeed> Feeds;
    global List<AssetWarrantyHistory> Histories;
    global List<AttachedContentDocument> AttachedContentDocuments;
    global List<Attachment> Attachments;
    global List<CombinedAttachment> CombinedAttachments;
    global List<ContentDocumentLink> ContentDocumentLinks;
    global List<EmailMessage> Emails;
    global List<Entitlement> AssetWarranties;
    global List<EntitySubscription> FeedSubscriptionsForEntity;
    global List<Event> Events;
    global List<FlowOrchestrationWorkItem> FlowOrchestrationWorkItems;
    global List<Note> Notes;
    global List<NoteAndAttachment> NotesAndAttachments;
    global List<OpenActivity> OpenActivities;
    global List<ProcessInstance> ProcessInstances;
    global List<ProcessInstanceHistory> ProcessSteps;
    global List<Task> Tasks;
    global List<TopicAssignment> TopicAssignments;
    global List<WorkOrder> WorkOrders;
    global List<WorkOrderLineItem> WorkOrderLineItems;
    global List<AIInsightValue> SobjectLookupValue;
    global List<AIRecordInsight> Target;
    global List<ContentDocumentLinkChangeEvent> LinkedEntity;
    global List<ContentVersion> FirstPublishLocation;
    global List<EmailMessageChangeEvent> RelatedTo;
    global List<EntitlementChangeEvent> AssetWarranty;
    global List<EventChangeEvent> What;
    global List<EventRelationChangeEvent> Relation;
    global List<FeedComment> Parent;
    global List<FlowExecutionErrorEvent> ContextRecord;
    global List<FlowRecordRelation> RelatedRecord;
    global List<OutgoingEmail> RelatedTo;
    global List<ProcessInstanceChangeEvent> TargetObject;
    global List<TaskChangeEvent> What;
    global List<WorkOrderChangeEvent> AssetWarranty;

    global AssetWarranty () 
    {
    }
}