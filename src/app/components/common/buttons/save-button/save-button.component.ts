import { Component } from '@angular/core';
import {ButtonBaseComponent} from '../common/button-base.component';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss']
})
export class SaveButtonComponent extends ButtonBaseComponent {}
