import { TestBed } from '@angular/core/testing';

import { TrainerAuthServiceService } from './trainer-auth-service.service';

describe('TrainerAuthServiceService', () => {
  let service: TrainerAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainerAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
