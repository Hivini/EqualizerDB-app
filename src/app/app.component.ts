import {Component, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import Project from './shared/models/project';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EqualizerDB-app';
  routes = [
    { path: 'home', label: 'Home' },
    { path: 'search', label: 'Search in DB' },
    { path: 'report', label: 'Report Generator' },
    { path: 'overview', label: 'DB Overview '},
    { path: 'insert', label: 'Insert Fields '},
  ];
  normalEmployeeRoutes = [
    { path: 'home', label: 'Home'},
    { path: 'teamEmployees', label: 'Search Interface Employees'},
    { path: 'interfaceValues', label: 'Search Project Interface Values'},
  ];
  equalizerEmployeeRoutes = [];
  teamManagerRoutes = [];
  projectOwnerRoutes = [];

  logoutRoute = { path: 'home', label: 'Logout'};

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private http: HttpClient) {
    // Give all the other paths to the next level of rights
    for (const link of this.normalEmployeeRoutes) {
      this.equalizerEmployeeRoutes.push(link);
    }
    this.equalizerEmployeeRoutes.push({ path: 'modifySettings', label: 'Modify my settings values'});

    // TODO Maybe add select project
    for (const link of this.equalizerEmployeeRoutes) {
      this.teamManagerRoutes.push(link);
    }
    this.teamManagerRoutes.push({ path: 'addMembers', label: 'Add team members'});
    this.teamManagerRoutes.push({ path: 'updateSettings', label: 'Update settings owner'});

    for (const link of this.teamManagerRoutes) {
      this.projectOwnerRoutes.push(link);
    }
    this.projectOwnerRoutes.push({ path: 'create', label: 'Create'});
    this.projectOwnerRoutes.push({ path: 'search', label: 'Search in DB' });

  }

  getRoutes() {
    switch (localStorage.getItem('user_rights')) {
      case '1':
        return this.normalEmployeeRoutes;
      case '2':
        return this.equalizerEmployeeRoutes;
      case '3':
        return this.teamManagerRoutes;
      case '4':
        return this.projectOwnerRoutes;
      default:
        return null;
    }
  }

  checkToken() {
    return localStorage.getItem('id_token') !== null;
  }

  checkRights() {
    return localStorage.getItem('user_rights');
  }

  logout() {
    localStorage.clear();
  }
}
