// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class ProductServiceCampaign {
    global Id Id;
    global SObject Owner;
    global Id OwnerId;
    global Boolean IsDeleted;
    global String ProductServiceCampaignName;
    global Datetime CreatedDate;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime LastModifiedDate;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime SystemModstamp;
    global Datetime LastViewedDate;
    global Datetime LastReferencedDate;
    global Product2 Product2;
    global Id Product2Id;
    global String Description;
    global Date StartDate;
    global Date EndDate;
    global String Type;
    global String Priority;
    global String Status;
    global String StatusCategory;
    global WorkType WorkType;
    global Id WorkTypeId;
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
    global List<ProductServiceCampaignFeed> Feeds;
    global List<ProductServiceCampaignHistory> Histories;
    global List<ProductServiceCampaignItem> ProductServiceCampaignItems;
    global List<ProductServiceCampaignShare> Shares;
    global List<ReturnOrder> ReturnOrders;
    global List<ReturnOrderLineItem> ReturnOrderLineItems;
    global List<Task> Tasks;
    global List<TopicAssignment> TopicAssignments;
    global List<WorkOrder> WorkOrders;
    global List<WorkOrderLineItem> WorkOrderLineItems;
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
    global List<ReturnOrderChangeEvent> ProductServiceCampaign;
    global List<TaskChangeEvent> What;
    global List<WorkOrderChangeEvent> ProductServiceCampaign;

    global ProductServiceCampaign () 
    {
    }
}