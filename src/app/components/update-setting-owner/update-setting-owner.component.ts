import { Component, OnInit } from '@angular/core';
import {Query} from '../../shared/models/query';
import {HttpClient, HttpParams} from '@angular/common/http';
import {FormControl} from '@angular/forms';
import Project from '../../shared/models/project';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-update-setting-owner',
  templateUrl: './update-setting-owner.component.html',
  styleUrls: ['./update-setting-owner.component.css']
})
export class UpdateSettingOwnerComponent implements OnInit {
  currentQuery: Query = {
    query: ''
  };
  httpOptions = {
    params: new HttpParams()
      .set('body', '')
  };
  projectControl = new FormControl();
  interfaceControl = new FormControl();
  settingsControl = new FormControl();
  projectValue = '';
  interfaceValue = '';
  settingsValue = '';
  projectOptions: Project[] = [];
  interfaceOptions: string[] = [];
  settingsOptions: string[] = [];
  filteredProjectOptions: Observable<Project[]>;
  filteredInterfaceOptions: Observable<string[]>;
  filteredSettingsOptions: Observable<string[]>;
  ownerName = 'Select a setting';
  ownerWwid = 'Select a setting';
  newOwnerWwid: string;
  settingsDict = [];

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
    this.settingsControl.disable();
  }

  private _filter(value: string): Project[] {
    const filterValue = value.toLowerCase();

    return this.projectOptions.filter(option => option.projectName.toLowerCase().includes(filterValue));
  }

  private _filter2(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.interfaceOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filter3(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.settingsOptions.filter(option => option.toLowerCase().includes(filterValue));
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
    if (iname !== null && iname !== '') {
      this.http.post('http://localhost:3000/settings/getSettingsOwner', {iname})
        .subscribe(settingsNames => {
          console.log(settingsNames);
          // @ts-ignore
          for (const sets of settingsNames.rows) {
            this.settingsDict.push({sname: sets[0], pOwner: sets[1]});
            this.settingsOptions.push(sets[0]);
          }
          console.log(this.settingsOptions);
          this.filteredSettingsOptions = this.settingsControl.valueChanges
            .pipe(
              startWith(''),
              map(value => this._filter3(value))
            );
          this.settingsControl.enable();
        });
    } else {
      this.settingsControl.disable();
    }
  }

  private selectSetting(settingName) {
    this.settingsValue = settingName;
    if (settingName !== null && settingName !== '') {
      let owner;
      for (const setting of this.settingsDict) {
        if (setting.sname === settingName) {
          owner = setting.pOwner;
          break;
        }
      }
      // TODO Get the name
      this.ownerName = owner;
      this.ownerWwid = owner;
    } else {
      this.ownerName = 'Select a setting';
      this.ownerWwid = 'Select a setting';
    }
  }

  private doUpdateQuery() {
    console.log(this.newOwnerWwid);
    if ((this.projectValue !== '' && this.projectValue !== null) &&
      (this.interfaceValue !== '' && this.interfaceValue !== null) &&
      (this.settingsValue !== '' && this.settingsValue != null)) {

      this.http.put('http://localhost:3000/settings/updateOwner',
        {iname: this.interfaceValue, registerfield: this.settingsValue, powner: this.newOwnerWwid})
        .subscribe(data => {
          console.log(data);
        });
    }
  }
}
