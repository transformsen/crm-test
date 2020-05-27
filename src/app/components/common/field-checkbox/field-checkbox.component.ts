import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'app-field-checkbox',
  templateUrl: './field-checkbox.component.html',
  styleUrls: ['./field-checkbox.component.scss']
})
export class FieldCheckboxComponent {
  // checked state
  @Input() @HostBinding('class.checked') checked = false;
}
