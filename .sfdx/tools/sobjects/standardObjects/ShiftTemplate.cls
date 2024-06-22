// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class ShiftTemplate {
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
    global Boolean IsActive;
    global Time StartTime;
    global String ShiftTemplateDurationType;
    global Double Duration;
    global String Description;
    global JobProfile JobProfile;
    global Id JobProfileId;
    global Boolean IsNonStandard;
    global RecordsetFilterCriteria RecordsetFilterCriteria;
    global Id RecordsetFilterCriteriaId;
    /* Set a background color to highlight shifts in the schedule view.
    */
    global String BackgroundColor;
    global String TimeSlotType;
    global List<Shift> Shifts;
    global List<ShiftPatternEntry> ShiftPatternEntries;
    global List<ShiftTemplateShare> Shares;
    global List<AIInsightValue> SobjectLookupValue;
    global List<AIRecordInsight> Target;
    global List<FlowExecutionErrorEvent> ContextRecord;
    global List<FlowRecordRelation> RelatedRecord;
    global List<ShiftChangeEvent> ShiftTemplate;

    global ShiftTemplate () 
    {
    }
}