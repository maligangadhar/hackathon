import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubReportComponent } from './pub-report.component';

describe('PubReportComponent', () => {
  let component: PubReportComponent;
  let fixture: ComponentFixture<PubReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
