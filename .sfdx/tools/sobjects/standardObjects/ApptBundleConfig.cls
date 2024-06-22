// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class ApptBundleConfig {
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
    /* Select the bundle service appointment statuses that are added to the bundle member service appointments. Use an empty value to propagate all statuses.
    */
    global String BundleStatusesToPropagate;
    /* Select the bundle member service appointment statuses that aren’t overridden when the bundle service appointment's status is updated. Use an empty value to propagate all statuses.
    */
    global String MemberStatusesNotToPropagate;
    /* Select the statuses of service appointments that can be bundled. Use an empty value to bundle service appointments in any status.
    */
    global String AddToBundleStatuses;
    /* Select the statuses of service appointments that can be removed from a bundle. Use an empty value to remove service appointments in any status.
    */
    global String RemoveFromBundleStatuses;
    /* Select the statuses that aren’t updated when a bundle is unbundled. Use an empty value to update service appointments when unbundling.
    */
    global String StatusesNotToUpdateOnUnbundle;
    /* Enter the criteria that automatically unbundles a bundle. Use an empty value to prevent automatic unbundling.
    */
    global RecordsetFilterCriteria CriteriaForAutoUnbundling;
    /* Enter the criteria that automatically unbundles a bundle. Use an empty value to prevent automatic unbundling.
    */
    global Id CriteriaForAutoUnbundlingId;
    /* Select the status of a service appointment after it’s removed from a bundle.
    */
    global String StatusOnRemovalFromBundle;
    /* If the bundle member service appointments aren't in the same location, add travel time between them to the bundle's duration according to their sort order.
    */
    global Boolean DoesAddTravelTime;
    global List<ActivityHistory> ActivityHistories;
    global List<ApptBundleConfigFeed> Feeds;
    global List<ApptBundleConfigHistory> Histories;
    global List<ApptBundleConfigShare> Shares;
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
    global List<TaskChangeEvent> What;

    global ApptBundleConfig () 
    {
    }
}