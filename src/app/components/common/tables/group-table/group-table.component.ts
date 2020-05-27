import { Component, OnInit } from '@angular/core';
import {DataTableBaseComponent} from '../table/common/data-table-base.component';
import {GroupResultJson} from '../../../../models/data/group-result';
import {TableColumn} from '../../../../models/component/table-column';

@Component({
  selector: 'app-group-table',
  templateUrl: './group-table.component.html',
  styleUrls: ['./group-table.component.scss']
})
export class GroupTableComponent extends DataTableBaseComponent<GroupResultJson> {
  // columns for member table
  columns: TableColumn[] = [
    new TableColumn('Group ID', 'groupId'),
    new TableColumn('Group Name', 'groupName'),
    new TableColumn('City', 'city'),
    new TableColumn('State', 'state'),
    new TableColumn('Termination Date', 'termDate'),
    new TableColumn('Future Effective Date', 'futureEffectiveDate'),
  ];
}
