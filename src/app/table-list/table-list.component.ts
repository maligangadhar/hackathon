import { Component, OnInit } from '@angular/core';
import { AnimationStyleMetadata } from '@angular/core/src/animation/dsl';
import {RevenueReportServiceService} from '../revenue-report-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  data: Observable<Array<any>>;
  
  constructor(private service: RevenueReportServiceService) {
    this.data = service.getRevReport();
    console.log("AppComponent.data:" + this.data);
  }

  ngOnInit() {
  }

}
