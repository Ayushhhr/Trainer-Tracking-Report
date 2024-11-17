import { TestBed } from '@angular/core/testing';

import { TrainerNavbarService } from './trainer-navbar.service';

describe('TrainerNavbarService', () => {
  let service: TrainerNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainerNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
