
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class RevenueReportServiceService {

  constructor(private http: Http) { }

  getRevReport(): Observable<any> {
    return this.http.get('http://localhost:3000/api/stats/delivery_reports?from_date=2018-06-06&to_date=2018-06-11')
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  getPubRevReport(): Observable<any> {
    return this.http.get('http://localhost:3000/api/stats/pub_reports?from_date=2018-06-06&to_date=2018-06-11')
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
