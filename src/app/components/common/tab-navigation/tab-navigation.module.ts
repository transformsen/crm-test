import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabNavigationComponent } from './tab-navigation.component';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [TabNavigationComponent],
  exports: [
    TabNavigationComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule
  ]
})
export class TabNavigationModule { }
