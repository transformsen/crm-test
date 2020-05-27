import { Component, OnInit } from '@angular/core';
import {DataTableBaseComponent} from '../table/common/data-table-base.component';
import {GroupResultJson} from '../../../../models/data/group-result';
import {TableColumn} from '../../../../models/component/table-column';

@Component({
  selector: 'app-sub-group-table',
  templateUrl: './sub-group-table.component.html',
  styleUrls: ['./sub-group-table.component.scss']
})
export class SubGroupTableComponent extends DataTableBaseComponent<GroupResultJson> {
  // columns for member table
  columns: TableColumn[] = [
    new TableColumn('Group ID', 'groupId'),
    new TableColumn('Subgroup ID', 'subGroupId'),
    new TableColumn('Subgroup Name', 'subGroupName'),
    new TableColumn('City', 'city'),
    new TableColumn('State', 'state'),
    new TableColumn('Termination Date', 'termDate'),
    new TableColumn('Future Effective Date', 'futureEffectiveDate'),
  ];
}
