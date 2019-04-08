import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Query} from '../query';

@Component({
  selector: 'app-sql-table',
  templateUrl: './sql-table.component.html',
  styleUrls: ['./sql-table.component.css']
})
export class SqlTableComponent implements OnInit {
  public data;
  public metadata;
  private httpOptionsInner;

  @Input() set httpOptions(value: {params: HttpParams}) {
    if (this.query !== undefined) {
      this.httpOptionsInner = value;
      this.showTable();
    }
  }

  @Input() query: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  showTable() {
    this.http.get('http://localhost:3000/', this.httpOptionsInner).subscribe(
      data => {
        // This has nothing beneficial, but removes an error in the IDE
        const result = JSON.parse(JSON.stringify(data));
        const metaData = result.metaData;
        const rows = result.rows;
        const resultProcessed = [];
        const metadataProcessed = [];
        for (const row of rows) {
          const chunk = {};
          for (const y in row) {
            chunk[metaData[y].name] = row[y];
          }
          resultProcessed.push(chunk);
        }

        for (const line of metaData) {
          metadataProcessed.push(line.name);
        }
        this.metadata = metadataProcessed;
        this.data = resultProcessed;
      },
      err => console.error(err),
      () => console.log('Finished')
    );
  }
}
