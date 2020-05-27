import { Component, OnInit } from '@angular/core';
import {DataTableBaseComponent} from '../table/common/data-table-base.component';
import {ProviderResultJson} from '../../../../models/data/provider-result';
import {TableColumn} from '../../../../models/component/table-column';

@Component({
  selector: 'app-advanced-provider-table',
  templateUrl: './advanced-provider-table.component.html',
  styleUrls: ['./advanced-provider-table.component.scss']
})
export class AdvancedProviderTableComponent extends DataTableBaseComponent<ProviderResultJson> {
  // columns for provider table
  columns: TableColumn[] = [
    new TableColumn('Provider First Name', 'firstName'),
    new TableColumn('Provider Last Name', 'lastName'),
    new TableColumn('Status', 'status'),
    new TableColumn('Address 1', 'address1'),
    new TableColumn('Address 2', 'address2'),
    new TableColumn('City', 'city'),
    new TableColumn('State', 'state'),
    new TableColumn('Termination Date', 'termDate'),
    new TableColumn('Tax ID', 'taxId'),
    new TableColumn('NPI', 'npi'),
  ];
}
