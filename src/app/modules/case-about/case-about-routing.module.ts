import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaseAboutComponent } from './case-about.component';
import {CaseAboutGuard} from './guards/case-about.guard';

const routes: Routes = [
  {
    path: '',
    component: CaseAboutComponent,
    canActivate: [
      CaseAboutGuard,
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaseAboutRoutingModule { }
