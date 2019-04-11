import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportGeneratorComponent} from './report-generator/report-generator.component';
import {SearchDisplayComponent} from './search-display/search-display.component';
import {HomeComponent} from './home/home.component';
import {DbOverviewComponent} from './db-overview/db-overview.component';
import {InsertRegistersComponent} from './insert-registers/insert-registers.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'report', component: ReportGeneratorComponent },
  { path: 'search', component: SearchDisplayComponent },
  { path: 'overview', component: DbOverviewComponent },
  { path: 'insert', component: InsertRegistersComponent },
  { path: 'login', component: ReportGeneratorComponent },
  { path: 'register', component: ReportGeneratorComponent },
  { path: 'logout', component: ReportGeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
