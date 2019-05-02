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
  MatSidenavModule,
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
    ReactiveFormsModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
