// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class Shift {
    global Id Id;
    global SObject Owner;
    global Id OwnerId;
    global Boolean IsDeleted;
    global String ShiftNumber;
    global Datetime CreatedDate;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime LastModifiedDate;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime SystemModstamp;
    global Datetime LastViewedDate;
    global Datetime LastReferencedDate;
    global String Label;
    global Datetime StartTime;
    global Datetime EndTime;
    global ServiceResource ServiceResource;
    global Id ServiceResourceId;
    global ServiceTerritory ServiceTerritory;
    global Id ServiceTerritoryId;
    global String StatusCategory;
    global String Status;
    global String TimeSlotType;
    global JobProfile JobProfile;
    global Id JobProfileId;
    global RecordsetFilterCriteria RecordsetFilterCriteria;
    global Id RecordsetFilterCriteriaId;
    global ShiftTemplate ShiftTemplate;
    global Id ShiftTemplateId;
    global Boolean IsNonStandard;
    /* Set a background color to highlight shifts in the schedule view.
    */
    global String BackgroundColor;
    global Boolean IsHolidayShift;
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
    global List<ShiftFeed> Feeds;
    global List<ShiftHistory> Histories;
    global List<ShiftShare> Shares;
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

    global Shift () 
    {
    }
}