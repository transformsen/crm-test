import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanToPlanFieldComponent } from './plan-to-plan-field.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



@NgModule({
  declarations: [PlanToPlanFieldComponent],
  exports: [
    PlanToPlanFieldComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatAutocompleteModule
  ]
})
export class PlanToPlanFieldModule { }
