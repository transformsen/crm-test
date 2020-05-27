import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'case-from',
    loadChildren: () => import('./modules/case-from/case-from.module').then(m => m.CaseFromModule)
  },
  {
    path: 'validation',
    loadChildren: () => import('./modules/validation/validation.module').then(m => m.ValidationModule)
  },
  { path: 'case-about', loadChildren: () => import('./modules/case-about/case-about.module').then(m => m.CaseAboutModule) },
  {
    path: '**',
    redirectTo: 'case-from',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
