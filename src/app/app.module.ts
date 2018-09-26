import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSampleTableModule } from 'projects/ngx-sample-table/src/lib/ngx-sample-table/ngx-sample-table.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.services';
import { NumberOnlyDirective } from './number.directive';


@NgModule({
  declarations: [
    AppComponent,
    NumberOnlyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSampleTableModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
