// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class RecordsetFilterCriteriaRule {
    global Id Id;
    global Boolean IsDeleted;
    global String RecordsetFilterCriteriaRuleNumber;
    global Datetime CreatedDate;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime LastModifiedDate;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime SystemModstamp;
    global Datetime LastViewedDate;
    global Datetime LastReferencedDate;
    global RecordsetFilterCriteria RecordsetFilterCriteria;
    global Id RecordsetFilterCriteriaId;
    global String CriteriaField;
    global String Operator;
    global String Value;
    global String Type;
    /* Set the start value. To determine if the rule is true, this value is compared to the Usage Field value.
    */
    global String FirstOccurrence;
    global String LastOccurrence;
    /* Set the frequency of maintenance. For example if this field is “1000”, this will schedule at every 1000 increments. This can either be a positive value for an incrementing Usage Field, or a negative value for a decreasing Usage Field.
    */
    global String Frequency;
    /* This field’s value is compared to the Usage Field to determine if the rule is true.
    */
    global String NextOccurrenceField;
    /* Index in the Recordset Filter Criteria Rule
    */
    global Integer Index;
    /* This field stores the daily usage rate of the asset. The unit for the usage rate must be per day.
    */
    global String UsageRateField;
    /* This enum value that define different options for Usage Rate Field.
    */
    global String UsageRateUnit;
    global List<AIInsightValue> SobjectLookupValue;
    global List<AIRecordInsight> Target;
    global List<FlowExecutionErrorEvent> ContextRecord;
    global List<FlowRecordRelation> RelatedRecord;

    global RecordsetFilterCriteriaRule () 
    {
    }
}