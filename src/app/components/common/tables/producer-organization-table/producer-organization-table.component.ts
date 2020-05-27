import {Component, OnChanges} from '@angular/core';
import {DataTableBaseComponent} from '../table/common/data-table-base.component';
import {TableColumn} from '../../../../models/component/table-column';
import {ProducerResultJson} from '../../../../models/data/producer-result';

@Component({
  selector: 'app-producer-organization-table',
  templateUrl: './producer-organization-table.component.html',
  styleUrls: ['./producer-organization-table.component.scss']
})
export class ProducerOrganizationTableComponent extends DataTableBaseComponent<ProducerResultJson> implements OnChanges {
  // columns for member table
  columns: TableColumn[] = [
    new TableColumn('Producer Organization Name', 'producerOrgName'),
    new TableColumn('Producer Organization ID', 'producerOrgId'),
    new TableColumn('City', 'city'),
    new TableColumn('State', 'state'),
    new TableColumn('Service State', 'serviceState'),
    new TableColumn('Subtype', 'subType'),
    new TableColumn('Status', 'status'),
  ];
}
