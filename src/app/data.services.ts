import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  baseUrl:string = "stub/db.json";
  
  constructor(private httpClient : HttpClient) { 
    
  }
  
  getAlphaNumericData(){
    return this.httpClient.get(this.baseUrl);
  }

}