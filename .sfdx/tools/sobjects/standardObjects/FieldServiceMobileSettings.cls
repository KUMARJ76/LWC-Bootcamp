// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class FieldServiceMobileSettings {
    global Id Id;
    global Boolean IsDeleted;
    global String DeveloperName;
    global String Language;
    global String MasterLabel;
    global Datetime CreatedDate;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime LastModifiedDate;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime SystemModstamp;
    global String NavbarBackgroundColor;
    global String BrandInvertedColor;
    global String FeedbackPrimaryColor;
    global String FeedbackSecondaryColor;
    global String PrimaryBrandColor;
    global String SecondaryBrandColor;
    global String ContrastPrimaryColor;
    global String ContrastSecondaryColor;
    global String ContrastTertiaryColor;
    global String ContrastQuaternaryColor;
    global String ContrastQuinaryColor;
    global String ContrastInvertedColor;
    global Boolean IsSendLocationHistory;
    global Integer GeoLocationMinUpdateFreqMins;
    global String GeoLocationAccuracy;
    global Integer RecordDataCacheTimeMins;
    global Integer MetadataCacheTimeDays;
    global Integer UpdateScheduleTimeMins;
    global Boolean IsShowEditFullRecord;
    global String TimeIntervalSetupMins;
    global String DefaultListViewDeveloperName;
    global String NavbarInvertedColor;
    global String FeedbackSelectedColor;
    global Integer FutureDaysInDatePicker;
    global Integer PastDaysInDatePicker;
    global Integer DaysBeforeCurrentServiceDate;
    global Integer DaysAfterCurrentServiceDate;
    global Integer MaxNumberOfServiceAppointments;
    global Boolean IsDefault;
    global Integer BgGeoLocationMinUpdateFreqMins;
    global String BgGeoLocationAccuracy;
    global Boolean IsUseSalesforceMobileActions;
    global Boolean IsAssignmentNotification;
    global Boolean IsDispatchNotification;
    global Boolean IsTimeSheetEnabled;
    global Boolean IsTimeZoneEnabled;
    /* Name of an existing flow that the Quick Status Change action is applied to.
    */
    global String QuickStatusChangeFlowName;
    /* Select a mode:
            Off—No automatic status changes.
            Manual—The mobile worker can cancel or update the status change.
            Timed—The mobile worker has a time period to prevent the status change. When the timer ends, the status changes.
            Automated—The mobile worker is notified that the status has changed.
        
    */
    global String AscAutomaticMode;
    /* Status that indicates that a mobile worker is traveling to a service appointment.
    */
    global String AscTravelStatus;
    /* Status that indicates that a mobile worker is at a service appointment.
    */
    global String AscOnSiteStatus;
    /* Status that indicates that a mobile worker completed a service appointment.
    */
    global String AscCompletedStatus;
    /* For the Timed mode only. Time that the user has to cancel the appointment status change.
    */
    global Integer AscCancellationTimerInSec;
    /* Service appointment radius that can trigger a status change.
    */
    global Integer AscRadiusInMeters;
    /* The time is applied only if Time from Service Appointment is enabled.
    */
    global Integer AscTimeLimitationInMin;
    global Boolean IsScheduleViewResourceAbsences;
    /* When limited tracking for Appointment Assistant is enabled, the mobile worker’s location is shown only on the way to a service appointment.
    */
    global Boolean IsLimitedLocTrackingEnabled;
    /* Configure the size of images uploaded by your mobile workers.To optimize upload speeds, you can limit your file size to a defined maximum size. Resizing your images affects the resolution of your images.
    */
    global Boolean IsOptimizedImageUploadEnabled;
    /* Enter a value between 0.2 and 1500.
    */
    global String OptimizeImageSizeInMb;
    /* A time period when status changes can occur, before an appointment’s scheduled start time and after the scheduled end time. Disable this option to ignore the entered Time from Service Appointment.
    */
    global Boolean IsAscTimeLimitEnabled;
    global List<AppExtension> AppExtensions;
    global List<MobileSettingsAssignment> MobileSettingsAssignments;
    global List<AppExtensionChangeEvent> FieldServiceMobileSettings;

    global FieldServiceMobileSettings () 
    {
    }
}