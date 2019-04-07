import {Component, Input, OnInit} from '@angular/core';
import { ConfigService } from './config.service';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

/*
const httpOptions = {
  params: new HttpParams()
    .set('query', 'SELECT * FROM TESTING')
};*/

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})


export class ConfigComponent implements OnInit {
  public data;
  public metadata;


  constructor(private http: HttpClient) { }
  private httpOptionsInner;
  @Input() set httpOptions(value: {params: HttpParams}) {
    this.httpOptionsInner = value;
    this.showConfig();
  }

  ngOnInit(): void {
  }

  showConfig() {
    this.http.get('http://localhost:3000/', this.httpOptionsInner).subscribe(
      data =>  {
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
