import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-sql-table',
  templateUrl: './sql-table.component.html',
  styleUrls: ['./sql-table.component.css']
})
export class SqlTableComponent implements OnInit {
  public data;
  public metadata;
  private httpOptionsInner;
  @Input() query: string;

  @Input() set httpOptions(value: {params: HttpParams}) {
    if (this.query !== '') {
      console.log(this.query);
      this.httpOptionsInner = value;
      this.showTable();
    }
  }



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  showTable() {
    const url = 'http://localhost:3000' + this.query;
    console.log('URL --> ' + url);
    if (this.query === '/users/getUserByInterface' || this.query === '/settings/getSettings') {
      this.http.post(url, JSON.parse(this.httpOptionsInner.params.updates[0].value)).subscribe(
        data => {
          this.processData(data);
        },
        err => console.log(err),
        () => console.log('Finished post')
      );
    } else {
      this.http.get(url, this.httpOptionsInner).subscribe(
        data => {
          this.processData(data);
        },
        err => console.error(err),
        () => console.log('Finished')
      );
    }
  }

  private processData(data) {
    console.log(data);
    // This has nothing beneficial, but removes an error in the IDE
    const result = JSON.parse(JSON.stringify(data));
    const metaData = result.metaData;
    const rows = result.rows;
    const resultProcessed = [];
    const metadataProcessed = [];
    for (const row of rows) {
      const chunk = {};
      for (const y in row) {
        if (metaData[y].name === 'REGISTERVALUE') {
          chunk[metaData[y].name] = '0x' + (+row[y].data[0]).toString(16);
          if (row[y].data.length > 1) {
            chunk[metaData[y].name] += (+row[y].data[1]).toString(16);
          }
        } else {
          chunk[metaData[y].name] = row[y];
        }
      }
      resultProcessed.push(chunk);
    }

    for (const line of metaData) {
      metadataProcessed.push(line.name);
    }
    this.metadata = metadataProcessed;
    this.data = resultProcessed;
  }
}
