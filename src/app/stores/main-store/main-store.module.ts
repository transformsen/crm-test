import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {MainStoreKey} from './main-store.actions';
import {mainReducer} from './main-store.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(MainStoreKey, mainReducer),
  ]
})
export class MainStoreModule { }
