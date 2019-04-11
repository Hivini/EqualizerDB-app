import { Component, OnInit } from '@angular/core';
import {Query} from '../query';
import {HttpClient, HttpParams} from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';
import {Table} from '../report-generator/report-generator.component';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-insert-registers',
  templateUrl: './insert-registers.component.html',
  styleUrls: ['./insert-registers.component.css']
})
export class InsertRegistersComponent implements OnInit {
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
  employeeVals = {
    email: '',
    password: '',
    fname: '',
    lname: '',
    eteamid: null
  };
  teamVals = {
    tname: '',
    organization: '',
    tmanager: null
  };
  projectVals = {
    pname: '',
    powner: null,
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  updateCurrentTable(table) {
    this.currentTable = table;
  }

  addField() {
    switch (this.currentTable.name) {
      case 'Employee':
        this.httpOptions = {
          params: new HttpParams()
            .set('fieldsVal', JSON.stringify(this.employeeVals))
        };
        this.http.post('http://localhost:3000/users/register', JSON.stringify(this.employeeVals), this.httpOptions)
          .subscribe(data => console.log(data));
        this.employeeVals.email = '';
        this.employeeVals.password = '';
        this.employeeVals.fname = '';
        this.employeeVals.lname = '';
        this.employeeVals.eteamid = null;
        break;
      case 'Team':
        this.httpOptions = {
          params: new HttpParams()
            .set('fieldsVal', JSON.stringify(this.teamVals))
        };
        this.http.post('http://localhost:3000/teams/register', JSON.stringify(this.teamVals), this.httpOptions)
          .subscribe(data => console.log(data));
        this.teamVals.tname = '';
        this.teamVals.organization = '';
        this.teamVals.tmanager = null;
        break;
      case 'Project':
        this.httpOptions = {
          params: new HttpParams()
            .set('fieldsVal', JSON.stringify(this.projectVals))
        };
        this.http.post('http://localhost:3000/projects/register', JSON.stringify(this.projectVals), this.httpOptions)
          .subscribe(data => console.log(data));
        this.projectVals.pname = '';
        this.projectVals.powner = null;
        break;
      default:
        break;
    }
  }
}
