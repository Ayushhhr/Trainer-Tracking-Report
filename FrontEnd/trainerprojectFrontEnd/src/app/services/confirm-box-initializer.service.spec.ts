import { TestBed } from '@angular/core/testing';

import { ConfirmBoxInitializerService } from './confirm-box-initializer.service';

describe('ConfirmBoxInitializerService', () => {
  let service: ConfirmBoxInitializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmBoxInitializerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
