
export interface MemberSearch {
  firstName: string;
  lastName: string;
  relationship: string;
  fullSSN: string;
  dob: string;
  ioi: string;
  contactGuid: string;
}

export interface MemberResultJson {
  id: number;
  policyGuid: string;
  policyId: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  effectiveDate: string;
  cancelDate: string;
  members: MemberSearch[];

  // for display
  firstName: string;
  lastName: string;
  relationship: string;
}
