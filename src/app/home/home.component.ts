import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  things: string[] = ['Execute Queries On DB', 'Generate Reports', 'DB Overview', 'Insert Fields'];
  constructor() { }

  ngOnInit() {
  }

}
