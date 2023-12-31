
export class MobInsured {
    MobPolicyId: string;
    MemberType: string;
    InsuredTitle: string;
    InsuredName: string;
    InsuredDOB: string;
    InsuredGender: string;
    InsuredRelation: string;
    ISPED: string;
    InnsuredPED: string;
    InsuredHeightInFeet: string;
    InsuredHeightInInches: string;
    InsuredWeight: string;
    IsAddonSix: string;
}

export class ADPSavePolicyDetailsRequestModel {
    Id: number;
    Applicantname: string;
    Applicantemail: string;
    Applicantmobile: string;
    Applicantdob: string;
    Producttype: string;
    Subproducttype: string;
    Policytype: string;
    PolicyStatus: string;
    ClientType: string;
    IpAddress: string;
    PaymentStatus: string;
    ApplicantTitle: string;
    ApplicantGender: string;
    ApplicantAddress1: string;
    ApplicantAddress2: string;
    ApplicantCity: any;
    ApplicantState: any;
    ApplicantPincode: string;
    BasicPremium: any;
    GST: any;
    TotalPremium: any;
    PolicyStartDate: string;
    PolicyEndDate: string;
    PolicyTenure: string;
    PolicyID: string;
    PF_PROPOSALNO: string;
    PF_POLICYID: string;
    PaymentReceivedOn: string;
    PaymentLinkSentOn: string;
    NomineeTitle: string;
    NomineeName: string;
    NomineeRelation: string;
    NomineeRelationID: string
    NomineeDOB: string;
    IsFeedfile: string;
    RegistrationNo: string;
    EngineNo: string;
    ChassisNo: string;
    RTO: string;
    Manufacturer: string;
    VehicleModel: string;
    CC: string;
    VehicleRegistrationDate: string;
    YearOfManufacture: string;
    AdditionalCovers: string;
    IDV: string;
    ProductName: string;
    PlanName: string;
    ProductCode: string;
    PlanCode: string;
    SubLimit: string;
    SumInsured: any;
    GSTINNo: string;
    DealID: string;
    BreakinID: string;
    SPCODE: string;
    SPNAME: string;
    CHANNELNAME: string;
    CUSTOMERREFERENCENUMBER: string;
    PRIMARYRMCODE: string;
    SECONDARYRMCODE: string;
    BANCAFIELD01: string;
    BANCAFIELD02: string;
    BANCAFIELD03: string;
    ISBreakin: string;
    IsAddonOne: string;
    AgentID: string;
    MobInsureds: MobInsured[] = Array<MobInsured>();
    IsAffluent: string;
    IsUnderwriterCase: string;
    RefMessage: string;
    Occupation: string;
    AnnualIncome: string;
    AdditionalInformation: string;
    CorrelationId: string;
    CustAccNo: string;
    Master_Policy_Number: string;
    PrevYearsPolicyNo: string;
    Eldest_Member_Age: string;
    PAN: string;
    STATECODE: string;
    CITYCODE: string;
    LEADID: string;
    NoofAdults: string;
    NoofChild: string;
    PropertyType:string;
PropertyPinCode:any;
PropertyValue:string;
CostOfConstruction:any;
CarpetArea:any;
StructureValue:any;
HomeContentElectrical:string;
HomeContentFurniture:string;
HomeContentOthers:string;
HomeContentValuables:string;
CoverDetails:string;
ContentData:string;
FinancierName:string;
ilkycReferenceNumber : string;
SkipDedupeLogic : boolean;
CKYCID : string;
pepFlag : boolean;
EKYCid: string;
}

export class ADPSavePolicyDetailsResponseModel {
    Id: number;
    StatusCode: number;
    StatusMsg: string;
    StatusDesc: string;
    ErrorText?: any;
}
