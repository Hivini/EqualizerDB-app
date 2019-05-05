import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportGeneratorComponent} from './components/report-generator/report-generator.component';
import {SearchDisplayComponent} from './components/search-display/search-display.component';
import {HomeComponent} from './components/home/home.component';
import {DbOverviewComponent} from './components/db-overview/db-overview.component';
import {InsertRegistersComponent} from './components/insert-registers/insert-registers.component';
import {ProjectEmployeeOverviewComponent} from './components/project-employee-overview/project-employee-overview.component';
import {InterfaceValuesOverviewComponent} from './components/interface-values-overview/interface-values-overview.component';
import {AddMembersFormComponent} from './components/add-members-form/add-members-form.component';
import {UpdateSettingOwnerComponent} from './components/update-setting-owner/update-setting-owner.component';
import {ModifySettingsFormComponent} from './components/modify-settings-form/modify-settings-form.component';
import {CreateProjectFormComponent} from './components/create-project-form/create-project-form.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'report', component: ReportGeneratorComponent },
  { path: 'search', component: SearchDisplayComponent },
  { path: 'overview', component: DbOverviewComponent },
  { path: 'insert', component: InsertRegistersComponent },
  { path: 'logout', component: ReportGeneratorComponent },
  { path: 'teamEmployees', component: ProjectEmployeeOverviewComponent },
  { path: 'interfaceValues', component: InterfaceValuesOverviewComponent },
  { path: 'addMembers', component: AddMembersFormComponent },
  { path: 'updateSettings', component: UpdateSettingOwnerComponent },
  { path: 'modifySettings', component: ModifySettingsFormComponent },
  { path: 'create', component: InsertRegistersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
