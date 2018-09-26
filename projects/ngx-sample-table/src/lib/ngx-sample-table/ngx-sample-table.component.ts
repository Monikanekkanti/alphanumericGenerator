import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { NgxSampleTableDataSource } from './ngx-sample-table-datasource';
import { DataService } from '../../../../../src/app/services/data.services';

@Component({
  selector: 'lib-ngx-sample-table',
  templateUrl: './ngx-sample-table.component.html',
  styleUrls: ['./ngx-sample-table.component.css']
})
export class NgxSampleTableComponent{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: NgxSampleTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'output'];
  constructor(private dataService: DataService) { }
  setDataSource(data: any[]) {
    this.dataSource = new NgxSampleTableDataSource(this.paginator, this.sort, data);
  }
}
