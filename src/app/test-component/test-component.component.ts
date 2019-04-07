import { Component, OnInit } from '@angular/core';
import { Query } from '../query';
import {debug} from 'util';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  currentQuery: Query = {
    query: ''
  };
  constructor() { }

  ngOnInit() {
  }

  doQuery(query: string): void {
    console.log(query);
  }
}
