import { Component, OnInit } from '@angular/core';
import {DataTableBaseComponent} from '../table/common/data-table-base.component';
import {ProviderResultJson} from '../../../../models/data/provider-result';
import {TableColumn} from '../../../../models/component/table-column';

@Component({
  selector: 'app-provider-location-table',
  templateUrl: './provider-location-table.component.html',
  styleUrls: ['./provider-location-table.component.scss']
})
export class ProviderLocationTableComponent extends DataTableBaseComponent<ProviderResultJson> {
  // columns for provider table
  columns: TableColumn[] = [
    new TableColumn('Practice Location Name', 'practiceLocation'),
    new TableColumn('Provider Last Name', 'lastName'),
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
