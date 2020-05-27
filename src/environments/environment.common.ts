import {OptionItem} from '../app/models/component/option-item';

export const commonEnvironment = {
  hipaaPathways: {
    member: [
      {
        caller: '',
        relationship: '',
        pathways: [
          {
            valid: ['policyId', 'last4ssn'],
            items: [
              {label: 'Policy ID', property: 'policyId'},
              {label: 'Last 4 Patient SSN', property: 'last4ssn'},
            ],
          },
          {
            valid: ['ssn'],
            items: [
              {label: 'Full Patient SSN', property: 'ssn'},
            ],
          },
          {
            valid: ['name', 'dateOfBirth', 'address'],
            items: [
              {label: 'Full Name', property: 'name'},
              {label: 'Date of Birth', property: 'dateOfBirth'},
              {label: 'Address', property: 'address'},
            ],
          },
        ],
      },
    ],
    basic: [
      {
        caseAboutType: 'member',
        pathways: [
          {
            valid: ['policyId', 'last4ssn'],
            items: [
              {label: 'Policy ID', property: 'policyId'},
              {label: 'Last 4 Patient SSN', property: 'last4ssn'},
            ],
          },
          {
            valid: ['ssn'],
            items: [
              {label: 'Full Patient SSN', property: 'ssn'},
            ],
          },
          {
            valid: ['name', 'dateOfBirth', 'address'],
            items: [
              {label: 'Full Name', property: 'name'},
              {label: 'Date of Birth', property: 'dateOfBirth'},
              {label: 'Address', property: 'address'},
            ],
          },
        ],
      },
      {
        caseAboutType: 'nonMember',
        pathways: [
          {
            valid: ['nonMemberId'],
            items: [
              {label: 'Non-Wellmark ID', property: 'nonMemberId'},
            ],
          },
        ],
      },
      {
        caseAboutType: 'contractedProvider',
        pathways: [
          {
            valid: ['npi', 'state'],
            items: [
              {label: 'NPI', property: 'npi'},
              {label: 'State', property: 'state'},
            ],
          },
        ],
      },
      {
        caseAboutType: 'nonContractedProvider',
        pathways: [
          {
            valid: ['npi', 'state'],
            items: [
              {label: 'NPI', property: 'npi'},
              {label: 'State', property: 'state'},
            ],
          },
        ],
      },
      {
        caseAboutType: 'providerPracticeLocation',
        pathways: [
          {
            valid: ['practiceLocation', 'npi', 'taxId'],
            items: [
              {label: 'practice location name', property: 'practiceLocation'},
              {label: 'NPI', property: 'npi'},
              {label: 'Tax ID', property: 'taxId'},
            ],
          },
        ],
      },
      {
        caseAboutType: 'producer',
        pathways: [
          {
            valid: ['name', 'npn'],
            items: [
              {label: 'Full Name', property: 'name'},
              {label: 'NPN', property: 'npn'},
            ],
          },
        ],
      },
      {
        caseFromType: 'producerOrganization',
        pathways: [
          {
            valid: ['producerOrgName', 'producerOrgId'],
            items: [
              {label: 'Organization Name', property: 'producerOrgName'},
              {label: 'Organization ID', property: 'producerOrgId'},
            ],
          },
        ],
      },
      {
        caseFromType: 'group',
        pathways: [
          {
            valid: ['groupName', 'groupId'],
            items: [
              {label: 'Group Name', property: 'groupName'},
              {label: 'Group ID', property: 'groupId'},
            ],
          },
        ],
      },
      {
        caseAboutType: 'subGroup',
        pathways: [
          {
            valid: ['groupName', 'groupId', 'subGroupId'],
            items: [
              {label: 'Group Name', property: 'groupName'},
              {label: 'Group ID', property: 'groupId'},
              {label: 'Subgroup ID', property: 'subGroupId'},
            ],
          },
        ],
      },
    ]
  },
  stateOptions: [
    new OptionItem<string>('Iowa', 'Iowa'),
    new OptionItem<string>('Minnesota', 'Minnesota'),
    new OptionItem<string>('South Dakota', 'South Dakota'),
  ],
};
