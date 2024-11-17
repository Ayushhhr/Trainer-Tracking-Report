import { TestBed } from '@angular/core/testing';

import { BatchTrainerServiceService } from './batch-trainer-service.service';

describe('BatchTrainerServiceService', () => {
  let service: BatchTrainerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatchTrainerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
