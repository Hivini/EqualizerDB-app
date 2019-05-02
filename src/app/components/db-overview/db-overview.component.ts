import { Component, OnInit } from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {Query} from '../../shared/models/query';

@Component({
  selector: 'app-db-overview',
  templateUrl: './db-overview.component.html',
  styleUrls: ['./db-overview.component.css']
})
export class DbOverviewComponent implements OnInit {
  currentQuery: Query = {
    query: ''
  };
  httpOptions = {
    params: new HttpParams()
      .set('query', '')
  };
  public table: string;
  query: string;
  constructor() { }

  ngOnInit() {
    this.query = '/search';
  }

  doQuery() {
    if (this.table !== undefined) {
      this.currentQuery.query = 'SELECT * FROM ' + this.table;
      this.httpOptions = {
        params: new HttpParams()
          .set('query', this.currentQuery.query)
      };
    }
  }

  doCustomQuery1() {
    this.currentQuery.query = 'SELECT team.teamid, team.tname, COUNT(*) as MEMBERS\n' +
      'FROM EMPLOYEE\n' +
      'INNER JOIN TEAM\n' +
      'ON employee.eteamid=team.teamid\n' +
      'GROUP BY team.teamid, team.tname\n' +
      'ORDER BY MEMBERS DESC';
    this.httpOptions = {
      params: new HttpParams()
        .set('query', this.currentQuery.query)
    };
  }

  doCustomQuery2() {
    this.currentQuery.query = 'SELECT project.projectid, project.pname, COUNT(*) as NUMSETTINGS\n' +
      'FROM PROJECT\n' +
      'INNER JOIN INTERFACE\n' +
      'ON PROJECT.PROJECTID=INTERFACE.IPROJECTID\n' +
      'INNER JOIN SETTINGS\n' +
      'ON INTERFACE.INAME=SETTINGS.INTERFACENAME \n' +
      'GROUP BY PROJECT.PROJECTID, PROJECT.PNAME\n' +
      'ORDER BY NUMSETTINGS ASC';
    this.httpOptions = {
      params: new HttpParams()
        .set('query', this.currentQuery.query)
    };
  }

  doCustomQuery3() {
    this.currentQuery.query = 'SELECT employee.wwid, employee.fname||\' \'||employee.lname AS FULL_NAME, COUNT(*) AS TOTAL_SETTINGS_OWN\n' +
      'FROM EMPLOYEE\n' +
      'INNER JOIN SETTINGS\n' +
      'ON EMPLOYEE.WWID=SETTINGS.SOWNER\n' +
      'GROUP BY employee.wwid, employee.fname||\' \'||employee.lname\n' +
      'HAVING COUNT(*) > 1\n' +
      'ORDER BY TOTAL_SETTINGS_OWN DESC';
    this.httpOptions = {
      params: new HttpParams()
        .set('query', this.currentQuery.query)
    };
  }
}
