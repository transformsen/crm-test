export interface ProviderResultJson {
  id: number;

  providerGuid: string;
  providerType: string;
  firstName: string;
  lastName: string;
  npi: string;
  taxId: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  termDate: string;
  status: string;
  practiceLocation: string;
  practiceGuid: string;

  // for display
  name: string;
}
