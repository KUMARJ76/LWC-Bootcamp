// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class ProductConsumed {
    global Id Id;
    global Boolean IsDeleted;
    global String ProductConsumedNumber;
    global Datetime CreatedDate;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime LastModifiedDate;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime SystemModstamp;
    global Datetime LastViewedDate;
    global Datetime LastReferencedDate;
    global WorkOrder WorkOrder;
    global Id WorkOrderId;
    global WorkOrderLineItem WorkOrderLineItem;
    global Id WorkOrderLineItemId;
    global ProductItem ProductItem;
    global Id ProductItemId;
    global PricebookEntry PricebookEntry;
    global Id PricebookEntryId;
    global Product2 Product2;
    global Id Product2Id;
    global String ProductName;
    global String QuantityUnitOfMeasure;
    global Double QuantityConsumed;
    global Decimal UnitPrice;
    global String Description;
    global Double Discount;
    global Decimal ListPrice;
    global Decimal TotalPrice;
    global Decimal Subtotal;
    global Boolean IsConsumed;
    global Boolean IsProduct2Serialized;
    global List<ActivityHistory> ActivityHistories;
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
    global List<ProductConsumedFeed> Feeds;
    global List<ProductConsumedHistory> Histories;
    global List<ProductConsumedState> ProductConsumedStates;
    global List<ProductItemTransaction> ProductItemTransactions;
    global List<RecordAction> RecordActions;
    global List<RecordActionHistory> RecordActionHistories;
    global List<SerializedProductTransaction> SerializedProductTransactions;
    global List<Task> Tasks;
    global List<TopicAssignment> TopicAssignments;
    global List<AIInsightValue> SobjectLookupValue;
    global List<AIRecordInsight> Target;
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
    global List<ProductItemTransactionChangeEvent> RelatedRecord;
    global List<TaskChangeEvent> What;

    global ProductConsumed () 
    {
    }
}