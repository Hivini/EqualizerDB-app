import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface QueryResult {
  metaData: [];
  rows: [];
}
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configURL = 'http://localhost:3000/';
  config: QueryResult;

  getConfig() {
    return this.http.request('GET', this.configURL);
  }

  constructor(private http: HttpClient) { }
}
