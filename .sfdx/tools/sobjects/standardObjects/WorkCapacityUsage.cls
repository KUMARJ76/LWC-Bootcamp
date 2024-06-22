// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class WorkCapacityUsage {
    global Id Id;
    global SObject Owner;
    global Id OwnerId;
    global Boolean IsDeleted;
    global String WorkCapacityUsageNumber;
    global Datetime CreatedDate;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime LastModifiedDate;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime SystemModstamp;
    global Datetime LastViewedDate;
    global Datetime LastReferencedDate;
    global String SvcApptField;
    global String SvcApptFieldValue;
    global Date StartDate;
    global Date EndDate;
    global ServiceTerritory ServiceTerritory;
    global Id ServiceTerritoryId;
    global String LimitationUnits;
    global Double LimitationValue;
    global Double TimeConsumedInMinutes;
    global String TimePeriod;
    global String WcuUniqueField1;
    global String WcuUniqueField2;
    global Double TimeConsumedInHours;
    global Double LimitationPercentage;
    global Double AvailCapacityHours;
    global String SvcApptFieldValDplyNm;
    global List<AttachedContentDocument> AttachedContentDocuments;
    global List<CombinedAttachment> CombinedAttachments;
    global List<ContentDocumentLink> ContentDocumentLinks;
    global List<EntitySubscription> FeedSubscriptionsForEntity;
    global List<FlowOrchestrationWorkItem> FlowOrchestrationWorkItems;
    global List<RecordAction> RecordActions;
    global List<RecordActionHistory> RecordActionHistories;
    global List<TopicAssignment> TopicAssignments;
    global List<WorkCapacityUsageFeed> Feeds;
    global List<WorkCapacityUsageShare> Shares;
    global List<ContentDocumentLinkChangeEvent> LinkedEntity;
    global List<ContentVersion> FirstPublishLocation;
    global List<FeedComment> Parent;
    global List<FlowExecutionErrorEvent> ContextRecord;
    global List<FlowRecordRelation> RelatedRecord;

    global WorkCapacityUsage () 
    {
    }
}