import { TestBed } from '@angular/core/testing';

import { TaughtHoursService } from './taught-hours.service';

describe('TaughtHoursService', () => {
  let service: TaughtHoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaughtHoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
