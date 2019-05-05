import { Component, OnInit } from '@angular/core';
import {Query} from '../../shared/models/query';
import {HttpClient, HttpParams} from '@angular/common/http';
import {FormControl} from '@angular/forms';
import Project from '../../shared/models/project';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-interface-values-overview',
  templateUrl: './interface-values-overview.component.html',
  styleUrls: ['./interface-values-overview.component.css']
})
export class InterfaceValuesOverviewComponent implements OnInit {
  currentQuery: Query = {
    query: ''
  };
  httpOptions = {
    params: new HttpParams()
      .set('body', '')
  };
  projectControl = new FormControl();
  interfaceControl = new FormControl();
  projectValue = '';
  interfaceValue = '';
  projectOptions: Project[] = [];
  interfaceOptions: string[] = [];
  filteredProjectOptions: Observable<Project[]>;
  filteredInterfaceOptions: Observable<string[]>;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/projects/getAll')
      .subscribe(data => {
        console.log(data);
        // @ts-ignore
        const rows = data.rows;
        for (const row of rows) {
          // @ts-ignore
          // tslint:disable-next-line:radix
          this.projectOptions.push({projectId: parseInt(row[0]), projectName: row[1]});
        }
      });

    this.filteredProjectOptions = this.projectControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    this.interfaceControl.disable();
  }

  private _filter(value: string): Project[] {
    const filterValue = value.toLowerCase();

    return this.projectOptions.filter(option => option.projectName.toLowerCase().includes(filterValue));
  }

  private _filter2(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.interfaceOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  private selectProject(projectid) {
    this.projectValue = projectid;
    if (projectid !== '' || projectid !== null) {
      this.http.post('http://localhost:3000/interfaces/getByProject', {projectid})
        .subscribe(interfaceNames => {
          console.log(interfaceNames);
          // @ts-ignore
          for (const interfacez of interfaceNames.rows) {
            this.interfaceOptions.push(interfacez[0]);
          }
          console.log(this.interfaceOptions);
          this.filteredInterfaceOptions = this.interfaceControl.valueChanges
            .pipe(
              startWith(''),
              map(value => this._filter2(value))
            );
          this.interfaceControl.enable();
        });
    } else {
      this.interfaceControl.disable();
    }
  }

  private selectInterface(iname) {
    this.interfaceValue = iname;
  }

  private doSearchQuery() {
    if ((this.projectValue !== '' && this.projectValue !== null) &&
      (this.interfaceValue !== '' && this.interfaceValue !== null)) {
      this.currentQuery.query = '/settings/getSettings';
      this.httpOptions = {
        params: new HttpParams()
          .set('interface', JSON.stringify({iname: this.interfaceValue}))
      };
    }
  }
}
