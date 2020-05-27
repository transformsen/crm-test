import {Component} from '@angular/core';
import {TableColumn} from '../../../../models/component/table-column';
import {ProviderResultJson} from '../../../../models/data/provider-result';
import {DataTableBaseComponent} from '../table/common/data-table-base.component';

@Component({
  selector: 'app-provider-table',
  templateUrl: './provider-table.component.html',
  styleUrls: ['./provider-table.component.scss']
})
export class ProviderTableComponent extends DataTableBaseComponent<ProviderResultJson> {
  // columns for provider table
  columns: TableColumn[] = [
    new TableColumn('Provider', 'name'),
    new TableColumn('NPI', 'npi'),
    new TableColumn('Tax ID', 'taxId'),
    new TableColumn('Address 1', 'address1'),
    new TableColumn('Address 2', 'address2'),
    new TableColumn('City', 'city'),
    new TableColumn('State', 'state'),
    new TableColumn('Termination Date', 'termDate'),
    new TableColumn('Status', 'status'),
  ];
}
