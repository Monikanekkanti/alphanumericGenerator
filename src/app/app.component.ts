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
  isTableVisible: boolean = true;

  @ViewChild('dataTable') dataTable: NgxSampleTableComponent;
  constructor(private dataService: DataService){
  }
  searchClickHandler(){
    this.dataService.getAlphaNumericData(this.seachTextbox).subscribe((res: NgxSampleTableItem[])=>{
      this.isTableVisible = true;
      let data = res["data"]["numbers"];
      data.forEach((item, index )=> {
        this.tableDataSource.push({"id": (index+1),"output":item});
      });
      // this.tableDataSource = res["data"]["numbers"];
      setTimeout(() => {
        this.dataTable.setDataSource(this.tableDataSource);
      });
    },
    (error) => {
      this.isTableVisible = false;
      this.tableDataSource = [];
    });    
  }
}