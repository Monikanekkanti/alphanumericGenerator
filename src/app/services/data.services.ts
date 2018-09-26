import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  endpoint:string = "http://localhost:3000/alphaNumbers/";
  
  constructor(private httpClient : HttpClient) { 
    
  }
  
  getAlphaNumericData(payLoad: string){
    // alert(payLoad);
    return this.httpClient.get(this.endpoint+payLoad);
  }

}