import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
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
import { SqlTableComponent } from './sql-table/sql-table.component';
import { ReportGeneratorComponent } from './report-generator/report-generator.component';
import { SearchDisplayComponent } from './search-display/search-display.component';
import { HomeComponent } from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DbOverviewComponent } from './db-overview/db-overview.component';
import { InsertRegistersComponent } from './insert-registers/insert-registers.component';

@NgModule({
  declarations: [
    AppComponent,
    SqlTableComponent,
    ReportGeneratorComponent,
    SearchDisplayComponent,
    HomeComponent,
    DbOverviewComponent,
    InsertRegistersComponent,
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
