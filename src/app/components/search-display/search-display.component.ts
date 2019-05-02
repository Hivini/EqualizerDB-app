import { Component, OnInit } from '@angular/core';
import {Query} from '../../shared/models/query';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css']
})
export class SearchDisplayComponent implements OnInit {
  currentQuery: Query = {
    query: ''
  };
  httpOptions = {
    params: new HttpParams()
      .set('query', '')
  };
  query: string;
  constructor() { }

  ngOnInit() {
    this.query = '/search';
  }

  doQuery(query: string): void {
    this.httpOptions = {
      params: new HttpParams()
        .set('query', query)
    };
  }
}
