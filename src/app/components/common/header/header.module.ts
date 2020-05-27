import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {IconChevronLeftModule} from '../icons/icon-chevron-left/icon-chevron-left.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {InputFieldModule} from '../fields/input-field/input-field.module';
import {StoreModule} from '@ngrx/store';
import {MainStoreModule} from '../../../stores/main-store/main-store.module';
import {CaseFromStoreModule} from '../../../stores/case-from-store/case-from-store.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IconChevronLeftModule,
    FlexLayoutModule,
    InputFieldModule,
    MainStoreModule,
    CaseFromStoreModule,
    RouterModule,
  ]
})
export class HeaderModule { }
