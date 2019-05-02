import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportGeneratorComponent} from './components/report-generator/report-generator.component';
import {SearchDisplayComponent} from './components/search-display/search-display.component';
import {HomeComponent} from './components/home/home.component';
import {DbOverviewComponent} from './components/db-overview/db-overview.component';
import {InsertRegistersComponent} from './components/insert-registers/insert-registers.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'report', component: ReportGeneratorComponent },
  { path: 'search', component: SearchDisplayComponent },
  { path: 'overview', component: DbOverviewComponent },
  { path: 'insert', component: InsertRegistersComponent },
  { path: 'logout', component: ReportGeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
