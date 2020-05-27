import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {CaseFromStoreKey} from './case-from-store.actions';
import {caseFromReducer} from './case-from-store.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(CaseFromStoreKey, caseFromReducer),
  ]
})
export class CaseFromStoreModule { }
