import { Component } from '@angular/core';

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

  logoutRoute = { path: 'logout', label: 'Logout'};
}
