import { Component } from '@angular/core';
import * as moment from 'moment';

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

  logoutRoute = { path: 'home', label: 'Logout'};

  checkToken() {
    return localStorage.getItem('id_token') != null;
  }

  checkRights() {
    return localStorage.getItem('user_rights');
  }

  logout() {
    localStorage.clear();

  }
}
