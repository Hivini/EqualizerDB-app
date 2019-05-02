import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Query} from '../../shared/models/query';
import {HttpParams} from '@angular/common/http';
export interface Table {
  name: string;
  route: string;
}

@Component({
  selector: 'app-report-generator',
  templateUrl: './report-generator.component.html',
  styleUrls: ['./report-generator.component.css']
})

export class ReportGeneratorComponent implements OnInit {
  currentQuery: Query = {
    query: ''
  };
  httpOptions = {
    params: new HttpParams()
      .set('body', '')
  };
  tableControl = new FormControl('', [Validators.required]);
  tables: Table[] = [
    {name: 'Employee', route: '/users'},
    {name: 'Team', route: '/teams'},
    {name: 'Project', route: '/projects'},
  ];
  currentTable: Table;

  showEmployeeAttr = {
    wwid: false,
    email: false,
    fname: false,
    lname: false,
    startDate: false,
    eteamid: false
  };
  showTeamAttr = {
    teamid: false,
    tname: false,
    organization: false,
    tmanager: false,
  };
  showProjectAttr = {
    projectid: false,
    pname: false,
    datecreated: false,
    powner: false,
  };
  constructor() { }

  ngOnInit() {
  }

  updateCurrentTable(table) {
    this.currentTable = table;
  }

  getUser() {
    if (this.currentTable.name === 'Employee') {
      this.currentQuery.query = '/users/getBy';
      this.httpOptions = {
        params: new HttpParams()
          .set('userdata', JSON.stringify(this.showEmployeeAttr))
      };
    } else if (this.currentTable.name === 'Team') {
      this.currentQuery.query = '/teams/getBy';
      this.httpOptions = {
        params: new HttpParams()
          .set('userdata', JSON.stringify(this.showTeamAttr))
      };
    } else if (this.currentTable.name === 'Project') {
      this.currentQuery.query = '/projects/getBy';
      this.httpOptions = {
        params: new HttpParams()
          .set('userdata', JSON.stringify(this.showProjectAttr))
      };
    }
  }
}
