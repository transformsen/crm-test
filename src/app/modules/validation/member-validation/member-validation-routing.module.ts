import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberValidationComponent } from './member-validation.component';

const routes: Routes = [
  {
    path: '',
    component: MemberValidationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberValidationRoutingModule { }
