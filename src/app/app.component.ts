import { Component, ViewChild } from '@angular/core';
import { NgxSampleTableComponent } from 'projects/ngx-sample-table/src/lib/ngx-sample-table/ngx-sample-table.component';
import { DataService } from './services/data.services';
import { NgxSampleTableItem } from 'projects/ngx-sample-table/src/lib/ngx-sample-table/ngx-sample-table-datasource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'sample-table';
  tableDataSource: NgxSampleTableItem[] = [];
  seachTextbox: string = '';

  @ViewChild('dataTable') dataTable: NgxSampleTableComponent;
  constructor(private dataService: DataService){
  }
  searchClickHandler(){
    this.dataService.getAlphaNumericData(this.seachTextbox).subscribe((res: NgxSampleTableItem[])=>{
      this.tableDataSource = res["alpha-numeric-values"];
      setTimeout(() => {
        this.dataTable.setDataSource(this.tableDataSource);
      });
    });    
  }
}