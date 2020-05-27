import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {CaseAboutStoreKey} from './case-about-store.actions';
import {caseAboutReducer} from './case-about-store.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(CaseAboutStoreKey, caseAboutReducer),
  ]
})
export class CaseAboutStoreModule { }
