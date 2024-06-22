// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class RecordsetFilterCriteria {
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
    /* The filter criteria is added to records in the source object.
    */
    global String SourceObject;
    /* Choose the object that stores the attributes you want to use in the filter conditions.
    */
    global String FilteredObject;
    global String Description;
    global Boolean IsActive;
    global String LogicalOperator;
    /* Define the logic of the conditions. To group conditions, use parentheses around the parameters, for example 1 AND (2 OR 3). If you add another condition, the custom logic is updated automatically to 1 AND (2 OR 3) AND 4.
    */
    global String CustomLogic;
    global List<ApptBundleAggrPolicy> ApptBundleAggrPolicies;
    global List<ApptBundleConfig> ApptBundleConfigs;
    global List<ApptBundlePolicy> ApptBundlePolicies;
    global List<AttachedContentDocument> AttachedContentDocuments;
    global List<CombinedAttachment> CombinedAttachments;
    global List<ContentDocumentLink> ContentDocumentLinks;
    global List<ContractLineOutcome> ContractLineOutcomes;
    global List<EntitySubscription> FeedSubscriptionsForEntity;
    global List<MaintenanceWorkRule> MaintenanceWorkRules;
    global List<RecordsetFilterCriteriaFeed> Feeds;
    global List<RecordsetFilterCriteriaHistory> Histories;
    global List<RecordsetFilterCriteriaRule> RecordsetFilterCriteriaRules;
    global List<RecordsetFilterCriteriaShare> Shares;
    global List<RecordsetFltrCritMonitor> RecordsetFltrCritMonitors;
    global List<Shift> ShiftRecordsetFilterCriteria;
    global List<ShiftTemplate> ShiftTemplates;
    global List<TimeSlot> TimeSlots;
    global List<AIInsightValue> SobjectLookupValue;
    global List<AIRecordInsight> Target;
    global List<ContentDocumentLinkChangeEvent> LinkedEntity;
    global List<ContentVersion> FirstPublishLocation;
    global List<FeedComment> Parent;
    global List<FlowExecutionErrorEvent> ContextRecord;
    global List<FlowRecordRelation> RelatedRecord;
    global List<MaintenanceWorkRuleChangeEvent> RecordsetFilterCriteria;

    global RecordsetFilterCriteria () 
    {
    }
}