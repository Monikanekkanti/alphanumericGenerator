import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSampleTableComponent } from './ngx-sample-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { DataService } from '../../../../../src/app/services/data.services';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [NgxSampleTableComponent],
  providers: [DataService],
  exports: [NgxSampleTableComponent]
})
export class NgxSampleTableModule { }
