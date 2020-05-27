import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidationComponent } from './validation.component';

const routes: Routes = [
  {
    path: '',
    component: ValidationComponent,
    children: [
      {
        path: 'member',
        loadChildren: () => import('./member-validation/member-validation.module').then(m => m.MemberValidationModule),
      }
    ]
  },
  { path: 'basic', loadChildren: () => import('./basic-validation/basic-validation.module').then(m => m.BasicValidationModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidationRoutingModule { }
