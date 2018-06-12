import { Component, OnInit } from '@angular/core';
import { AnimationStyleMetadata } from '@angular/core/src/animation/dsl';
import {RevenueReportServiceService} from '../revenue-report-service.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'pub-table-list',
  templateUrl: './pub-report.component.html',
  styleUrls: ['./pub-report.component.scss']
})
export class PubReportComponent implements OnInit {
  data: Observable<Array<any>>;
  data2:any;
  
  constructor(private service: RevenueReportServiceService) {
   this.data2=service.getPubRevReport();
  /*  service.getPubRevReport().subscribe((data:  Array<object>) => {
      this.data2  =  data;
      console.log(data);
  });*/
    console.log("AppComponent.data:" + this.data);
  }

  ngOnInit() {
    
  }

}
