// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class WorkCapacityLimit {
    global Id Id;
    global SObject Owner;
    global Id OwnerId;
    global Boolean IsDeleted;
    global String WorkCapacityLimitNumber;
    global Datetime CreatedDate;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime LastModifiedDate;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime SystemModstamp;
    global Datetime LastViewedDate;
    global Datetime LastReferencedDate;
    global ServiceTerritory ServiceTerritory;
    global Id ServiceTerritoryId;
    /* Enter the number of hours or a percentage as a whole number.
    */
    global Double LimitationValue;
    global String Description;
    global Date StartDate;
    global Date EndDate;
    global String TimePeriod;
    /* Save the record and then activate it. You can't update fields in an active record.
    */
    global Boolean IsActive;
    /* You can only select a service appointment field in the first work capacity limit instance.
    */
    global String SvcApptField;
    global String SvcApptFieldValue;
    global String LimitationUnits;
    global Boolean IsMonday;
    global Boolean IsTuesday;
    global Boolean IsWednesday;
    global Boolean IsThursday;
    global Boolean IsFriday;
    global Boolean IsSaturday;
    global Boolean IsSunday;
    global String SvcApptFieldValDplyNm;
    global List<AttachedContentDocument> AttachedContentDocuments;
    global List<CombinedAttachment> CombinedAttachments;
    global List<ContentDocumentLink> ContentDocumentLinks;
    global List<EntitySubscription> FeedSubscriptionsForEntity;
    global List<FlowOrchestrationWorkItem> FlowOrchestrationWorkItems;
    global List<RecordAction> RecordActions;
    global List<RecordActionHistory> RecordActionHistories;
    global List<TopicAssignment> TopicAssignments;
    global List<WorkCapacityLimitFeed> Feeds;
    global List<WorkCapacityLimitHistory> Histories;
    global List<WorkCapacityLimitShare> Shares;
    global List<ContentDocumentLinkChangeEvent> LinkedEntity;
    global List<ContentVersion> FirstPublishLocation;
    global List<FeedComment> Parent;
    global List<FlowExecutionErrorEvent> ContextRecord;
    global List<FlowRecordRelation> RelatedRecord;

    global WorkCapacityLimit () 
    {
    }
}