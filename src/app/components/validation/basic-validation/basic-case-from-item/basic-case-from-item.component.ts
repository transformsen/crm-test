import {Component, Input, OnChanges} from '@angular/core';
import {AppCaseFromItemType} from '../../../../stores/case-from-store/case-from-store.reducer';

@Component({
  selector: 'app-basic-case-from-item',
  templateUrl: './basic-case-from-item.component.html',
  styleUrls: ['./basic-case-from-item.component.scss']
})
export class BasicCaseFromItemComponent implements OnChanges {
  // case from item type
  @Input() type: AppCaseFromItemType;
  // case from item data
  @Input() data: any;

  ngOnChanges(){}
}
