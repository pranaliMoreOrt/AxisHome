export class PPAPAgentAppMasterDataResponse{
//     UserID:string;
//    AgentID:string;
//    EnPassKey:string;
//    MapDeal:string;
//    RenewalTotalCount:Number;
//    RenewalConvertedCount:Number;
//    UserQuoteCount:Number;
//    UserQuoteConvertedCount:Number;
//    LapsedCount:Number;
//    PendingPaymentCount:Number;
//    LicenseNumber:string;
//    PANNumber:string;
//    MobileNumber:string;
//    Email:string;
//    AgentName:string;
//    Telephone:string;
//    Salutation:string;
//    VDFlag:Boolean;
//    UserType:Number;
//    CreatedBy:string;
//    isProfileMandatory:Boolean;
//    Renewal4WCount:Number;
//    Renewal2WCount:Number;
//    RenewalHealthCount:Number;
//    RenewalConverted4WCount:Number;
//    RenewalConverted2WCount:Number;
//    RenewalConvertedHealthCount:Number;
//    RenewalLapsed4WCount:Number;
//    RenewalLapsed2WCount:Number;
//    RenewalLapsedHealthCount:Number;
//    INTERACTION_USER_ID:string;
//    DisableFeatures:DisableFeatures;
   
//    MappedProduct:{
//       Motor:{
//          isFourWheelerMapped:Boolean;
//          FourWheelerDealId:string;
//          FourWheelerTarrifType:{
//             isNormal:Boolean;
//             isShortPeriod:Boolean;
//             isProRata:Boolean
//          };
//          isTwoWheelerMapped:Boolean;
//          TwoWheelerDealId:string;
//          TwoWheelerTarrifType:{
//             isNormal:Boolean;
//             isShortPeriod:Boolean;
//             isProRata:Boolean
//          };
//          isTWShopMapped:Boolean;
//          isFWShopMapped:Boolean;
//          isGCVMapped:Boolean;
//          GCVDealId:string;
//          GCVTarrifType:{
//             isNormal:Boolean;
//             isShortPeriod:Boolean;
//             isProRata:Boolean
//          };
//          isPCVMapped:Boolean;
//          PCVDealId:string;
//          PCVTarrifType:{
//             isNormal:Boolean;
//             isShortPeriod:Boolean;
//             isProRata:Boolean
//          };
//          isTwoWheelerTPMapped:Boolean;
//          TwoWheelerTPDealId:string;
//          isFourWheelerTPMapped:Boolean;
//          FourWheelerTPDealId:string;
//       };
//       Health:Health[];
//       Travel:Travel[];
//       Affinity:Affinity[];
//    };
//    isInstaPoliciesPending:Boolean;
//    BQ_merchantId:string;
//    BQ_terminalId:string;
//    BQ_ain:string;
//    BQ_type:string;
//    BQ_source:string;
//    BrochureList:BrochureList[];
   
//    isPOSUser:Boolean;
//    isSubAgentUser:Boolean;
//    TWPACover:string;
//    FWPACover:string;
//    isSubAgent:Number;
//    subAgentUserID:Number;
//    SubUserID:string;
//    SubEnPassKey:string;
//    RTSDetails:string;
//    HealthRollverValidationPED:Number;
//    HealthRollverValidationWithPED:Number;
//    UserBasicAuth:string;
//    IsRazorWallet:Boolean;
//    IS_ICR_OCR_ENABLE:Number
// }

// export class Health{
//     isHealthCHIMapped:Boolean;
//     HealthCHIDealId:string;
//     HealthCHISubProducts:HealthCHISubProducts[];
//     isHealthBoosterMapped:Boolean;
//     HealthBoosterDealId:string;
//     HealthBoosterSubProducts:HealthBoosterSubProducts[];
//     isHealthPPAPMapped:Boolean;
//     HealthPPAPDealId:string;
//     isHospifundMapped:Boolean;
//     HospifundDealId:string;
//     isHealthCHIInsta:Boolean;
//     isHealthBoosterInsta:Boolean;
//     isHealthPPAPInsta:Boolean;
//     isHealthHospiFundInsta:Boolean;
//     isHealthgCHIMapped:Boolean;
//     isHealthASPMapped:Boolean;
//     HealthASPDealId:string;
//     HealthASPSubProducts:string;
//     isFamilyShield:Boolean;
//     FamilyShieldDealId:string
//  };

// export class HealthBoosterSubProducts{
//     Visible_Topup:Boolean;
//     Visible_SuperTopup:Boolean
//  }
// export class HealthCHISubProducts{
//     Visible_HelathProtectPlus:Boolean;
//     Visible_HealthSecure:Boolean;
//     Visible_HealthSecurePlus:Boolean;
//     Visible_HealthProtect:Boolean;
//     Visible_HealthSmart:Boolean;
//     Visible_HealthSmartPlus:Boolean;
//     Visible_iHealth:Boolean;
//     Visible_iHealthPlus:Boolean;
//     Visible_Rollover:Boolean;
//     Visible_gCHI:Boolean
//  };
// export class Travel{
//     isTRAVELSTUDENTMapped:Boolean;
//     isTRAVELINTERNATIONALMapped:Boolean
//  }

// export class Affinity{
//     AllRisk:Boolean;
//     ExtendedWarranty:Boolean
//  }

// export class DisableFeatures{
//     UPI_Payment:string;
//     TRACK_CLAIM:string;
//     PID_WITH_CUSTOMER:string;
//     Health_CC_DC_Pay:string;
//     HealthBooster:string;
//     isVideoChatEnabled:string;
//     isSummitEnabled:string;
//     POS_SWIPE:string;
//     Health_NB_Pay:string;
//     isAgentOneView_Enabled:string;
//     IS_PIZZA_ENABLED:string;
//     isRazorPayEnabled:string;
//     isRTSPPAPEnabled:string;
//     isHospifundChequeEnabled:string;
//     HCI_ENABLED:string;
//     IS_NEW_PAYMENT_IN_HEALTH_ENABLED:string;
//     HBooster_Policy_Email:string;
//     IsFamilyShieldEnabled:string;
//     Discounting_Blocked:string;
//     isUploadDocumentSMEEnabled:string;
//     isCoBrandUpdateNeeded:string;
//     isRazorPayEnabledChatbot:string;
//     Show_Manual_Covernote:string;
//     HEALTH_CHECKUP_APPOINTMENT:string;
//     IS_NEW_PAYMENT_IN_MOTOR_ENABLED:string;
//     Health_Card:string;
//     isVideoChatEnabledForAll:string;
//     PP_BUNDLE:string;
//     BHARAT_QR_ENABLED:string;
//     Travel_Senior_Floater:string;
//     mRupeePayment_Enabled:string;
//     AADHAAR_PAY_ENABLED:string;
//     isKeralaCessEnabled:string;
//     BreakInRenewalPayment_Enabled:string;
//     CUSTOMER_PAYMENT_LINK:string;
//     HEALTH_CHECKUP_APPOINTMENT_EMAIL:string;
//     iHelath_Payment_Link:string;
//     isDocScannerUpdatedNeeded:string;
//     Proposal_PDF_Sign:string;
//     isAddon1Mandatory:string;
//     show_Motor_Discount:string;
//     test:string;
//     BreakInPayment_Enabled:string;
//     isHealthPPAPEnabled:string;
//     AdhocPayment_Enabled:string;
//     BHARAT_QR_PID_ENABLED:string;
//     3CP_Enabled:string;
//     REMOTE_ERROR_REPORT:string;
//     Motor_Transaction_Enabled:string;
//     isFeedBackEnabled:string
//  }

//  export class BrochureList
//     {
//        FilePath:string;
//        FileName:string;
//     }

}
    