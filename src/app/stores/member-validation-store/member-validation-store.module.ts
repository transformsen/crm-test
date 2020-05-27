import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {MemberValidationStoreKey} from './member-validation-store.actions';
import {memberValidationReducer} from './member-validation-store.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(MemberValidationStoreKey, memberValidationReducer),
  ]
})
export class MemberValidationStoreModule { }
