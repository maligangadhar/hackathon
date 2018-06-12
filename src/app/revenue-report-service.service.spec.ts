import { TestBed, inject } from '@angular/core/testing';

import { RevenueReportServiceService } from './revenue-report-service.service';

describe('RevenueReportServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RevenueReportServiceService]
    });
  });

  it('should be created', inject([RevenueReportServiceService], (service: RevenueReportServiceService) => {
    expect(service).toBeTruthy();
  }));
});
