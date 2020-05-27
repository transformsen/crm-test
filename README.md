# CrmSearchValidationUi

CRM Search & Validation UI

## Installation

```bash
# install dependencies
npm i
```

## Commands

```bash
# run dev server
ng serve --open

# build in production mode
ng build --prod

# lint
ng lint

# lint with fixing
ng lint --fix
```

## Environments

Environments files are located in `src/environments`.\
The `environments.common.ts` file is common environment for both development mode and production mode.

1. `production`: Whether production mode or not.
1. `apiHost`: Api host url.
1. `api`: The back end host url.
1. `defaultPageSize`: Default page size for tables.
1. `stateOptions`: The options for state field. Only 3 options exist for now.
1. `hipaaPathways`: The hipaa pathway definitions. See **Hipaa Pathway Configuration** section to get more details.

## Hipaa Pathway Configuration

The hipaa pathway is configured as `hipaaPathways` in `environments.common.ts`.\
There are 2 fields in `hipaaPathways` configuration.\
One is `member` and the other is `basic`.\
The `member` is used for member validation page which can be captured by `caller` and `relationship`.\
The `basic` is used for basic validation page which can be captured by `caseFromType` or `caseAboutType`.\
Each item of `member` and `basic` has `pathways` field.\
The `pathways` field is consist of `valid` and `items`.\
The `valid` is valid field array for specific `pathways`. It will be used for validating depends on user action.\
The `items` is used for render items in UI.

## Verification

See `docs/verification.md`.
