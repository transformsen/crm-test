import {commonEnvironment} from './environment.common';

export const environment = {
  production: true,
  apiHost: '/assets/json',
  api: 'http://localhost:3000/v1',
  defaultPageSize: 5,
  ...commonEnvironment,
};
