import {NgModule} from '@angular/core';
import {ModernPaginatorComponent} from './modern-paginator.component';
import {CommonModule} from '@angular/common';
import {IconChevronRightModule} from '../../icons/icon-chevron-right/icon-chevron-right.module';
import {IconChevronLeftModule} from '../../icons/icon-chevron-left/icon-chevron-left.module';
import {MatSelectModule} from '@angular/material/select';
import {IconChevronRightEndModule} from '../../icons/icon-chevron-right-end/icon-chevron-right-end.module';
import {IconChevronLeftEndModule} from '../../icons/icon-chevron-left-end/icon-chevron-left-end.module';

@NgModule({
  declarations: [
    ModernPaginatorComponent,
  ],
  imports: [
    CommonModule,
    IconChevronRightModule,
    IconChevronLeftModule,
    MatSelectModule,
    IconChevronRightModule,
    IconChevronRightEndModule,
    IconChevronLeftEndModule,
  ],
  exports: [
    ModernPaginatorComponent,
  ]
})
export class ModernPaginatorModule {
}
