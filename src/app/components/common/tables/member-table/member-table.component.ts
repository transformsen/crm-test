import {Component} from '@angular/core';
import {TableColumn} from '../../../../models/component/table-column';
import {MemberResultJson} from '../../../../models/data/member-result';
import {DataTableBaseComponent} from '../table/common/data-table-base.component';

@Component({
  selector: 'app-member-table',
  templateUrl: './member-table.component.html',
  styleUrls: ['./member-table.component.scss']
})
export class MemberTableComponent extends DataTableBaseComponent<MemberResultJson> {
  // columns for member table
  columns: TableColumn[] = [
    new TableColumn('First Name', 'firstName'),
    new TableColumn('Last Name', 'lastName'),
    new TableColumn('Relationship', 'relationship'),
    new TableColumn('Policy ID', 'policyId'),
    new TableColumn('Address Line 1', 'address1'),
    new TableColumn('Address Line 2', 'address2'),
    new TableColumn('City', 'city'),
    new TableColumn('State', 'state'),
    new TableColumn('Effective Date', 'effectiveDate'),
    new TableColumn('Termination Date', 'cancelDate'),
  ];
}
