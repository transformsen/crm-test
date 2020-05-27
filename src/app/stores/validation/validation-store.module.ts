import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {ValidationStoreKey} from './validation-store.actions';
import {validationReducer} from './validation-store.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(ValidationStoreKey, validationReducer),
  ]
})
export class ValidationStoreModule { }
