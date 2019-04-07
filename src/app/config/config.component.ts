import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  public data;
  public metadata;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.showConfig();
  }

  showConfig() {
    this.configService.getConfig().subscribe(
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
            console.log('y ', y);
            chunk[metaData[y].name] = row[y];
          }
          resultProcessed.push(chunk);
        }

        for (const line of metaData) {
          metadataProcessed.push(line.name);
        }

        console.log(resultProcessed);
        console.log(metadataProcessed);
        this.metadata = metadataProcessed;
        this.data = resultProcessed;
      },
      err => console.error(err),
      () => console.log('Finished')
    );
  }

}
