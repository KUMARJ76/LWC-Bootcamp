// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class ApptBundlePolicy {
    global Id Id;
    global SObject Owner;
    global Id OwnerId;
    global Boolean IsDeleted;
    /* Enter a unique name.
    */
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
    /* Make this policy available when the dispatcher manually bundles service appointments in the dispatch console. You can have manual bundling and automatic bundling enabled at the same time.
    */
    global Boolean IsManualBundling;
    /* Make this policy available when automatic bundling is triggered by an automated process. You can have manual bundling and automatic bundling enabled at the same time.
    */
    global Boolean IsAutomaticBundling;
    /* Enter the maximum number of bundle members that can be included in a bundle, up to 200.
    */
    global Integer LimitAmountOfBundleMembers;
    /* Enter the maximum duration of a bundle, in minutes.
    */
    global Integer LimitDurationOfBundle;
    /* Select the bundle service appointment field used for the bundle’s start time.
    */
    global String BundleStartTimeFieldName;
    /* Select the bundle service appointment field used for the bundle’s end time.
    */
    global String BundleEndTimeFieldName;
    /* Subtract the bundle’s start time from the bundle’s end time and compare it to the bundle’s Duration.
    */
    global Boolean IsTimeCalcByBundleDurationFld;
    /* Use this option only if Time Calculation by Bundle Duration Field is enabled. Enter the bundle’s total time as a constant value, in minutes.
    */
    global Integer ConstantTimeValue;
    /* Select the filter criteria used for the bundle members. Only service appointments that meet the criteria can be bundled.
    */
    global RecordsetFilterCriteria FilterCriteria;
    /* Select the filter criteria used for the bundle members. Only service appointments that meet the criteria can be bundled.
    */
    global Id FilterCriteriaId;
    /* Allow bundling of service appointments with scheduling dependencies.
    */
    global Boolean CanAllowSchleDepndInBundle;
    /* Enter a policy priority number. Must be unique. When the bundle policies are evaluated with automatic bundling, the priority determines the order that the policies are applied.
    */
    global Integer Priority;
    global List<ActivityHistory> ActivityHistories;
    global List<ApptBundleAggrPolicy> ApptBundleAggrPolicies;
    global List<ApptBundlePolicyFeed> Feeds;
    global List<ApptBundlePolicyShare> Shares;
    global List<ApptBundlePolicySvcTerr> ApptBundlePolicySvcTerrs;
    global List<ApptBundlePropagatePolicy> ApptBundlePropagatePolicies;
    global List<ApptBundleRestrictPolicy> ApptBundleRestrictPolicies;
    global List<ApptBundleSortPolicy> ApptBundleSortPolicies;
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
    global List<ServiceAppointment> BundlePolicy;
    global List<TaskChangeEvent> What;

    global ApptBundlePolicy () 
    {
    }
}