import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatIconModule,
  MatInputModule, MatListModule,
  MatSelectModule,
  MatSidenavModule, MatStepperModule,
  MatTableModule,
  MatTabsModule, MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SqlTableComponent } from './components/sql-table/sql-table.component';
import { ReportGeneratorComponent } from './components/report-generator/report-generator.component';
import { SearchDisplayComponent } from './components/search-display/search-display.component';
import { HomeComponent } from './components/home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DbOverviewComponent } from './components/db-overview/db-overview.component';
import { InsertRegistersComponent } from './components/insert-registers/insert-registers.component';
import { AuthenticateFormComponent } from './components/authenticate-form/authenticate-form.component';
import {AuthInterceptorService} from './services/auth-interceptor.service';
import { ProjectEmployeeOverviewComponent } from './components/project-employee-overview/project-employee-overview.component';
import {MatAutocompleteModule} from '@angular/material';
import { InterfaceValuesOverviewComponent } from './components/interface-values-overview/interface-values-overview.component';
import { AddMembersFormComponent } from './components/add-members-form/add-members-form.component';
import { UpdateSettingOwnerComponent } from './components/update-setting-owner/update-setting-owner.component';

@NgModule({
  declarations: [
    AppComponent,
    SqlTableComponent,
    ReportGeneratorComponent,
    SearchDisplayComponent,
    HomeComponent,
    DbOverviewComponent,
    InsertRegistersComponent,
    AuthenticateFormComponent,
    ProjectEmployeeOverviewComponent,
    InterfaceValuesOverviewComponent,
    AddMembersFormComponent,
    UpdateSettingOwnerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    NgbModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatStepperModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
