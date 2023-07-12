import { TestBed } from '@angular/core/testing';

import { InspectionApiServiceService } from './inspection-api-service.service';

describe('InspectionApiServiceService', () => {
  let service: InspectionApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspectionApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
