import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {SearchStoreKey} from './search-store.actions';
import {searchReducer} from './search-store.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(SearchStoreKey, searchReducer),
  ]
})
export class SearchStoreModule { }
