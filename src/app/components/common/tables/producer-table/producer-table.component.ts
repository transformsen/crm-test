import { Component } from '@angular/core';
import {DataTableBaseComponent} from '../table/common/data-table-base.component';
import {ProducerResultJson} from '../../../../models/data/producer-result';
import {TableColumn} from '../../../../models/component/table-column';

@Component({
  selector: 'app-producer-table',
  templateUrl: './producer-table.component.html',
  styleUrls: ['./producer-table.component.scss']
})
export class ProducerTableComponent extends DataTableBaseComponent<ProducerResultJson> {
  // columns for producer table
  columns: TableColumn[] = [
    new TableColumn('First Name', 'firstName'),
    new TableColumn('Last Name', 'lastName'),
    new TableColumn('NPN', 'npn'),
    new TableColumn('City', 'city'),
    new TableColumn('State', 'state'),
    new TableColumn('Service State', 'serviceState'),
    new TableColumn('Status', 'status'),
    new TableColumn('Termination Date', 'termDate'),
  ];
}
