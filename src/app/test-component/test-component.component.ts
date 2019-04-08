import { Component, OnInit } from '@angular/core';
import { Query } from '../query';
import {debug} from 'util';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {xw
  currentQuery: Query = {
    query: ''
  };
  httpOptions = {
    params: new HttpParams()
      .set('query', '')
  };
  constructor() { }

  ngOnInit() {
  }

  doQuery(query: string): void {
    this.httpOptions = {
      params: new HttpParams()
        .set('query', query)
    };
  }
}
