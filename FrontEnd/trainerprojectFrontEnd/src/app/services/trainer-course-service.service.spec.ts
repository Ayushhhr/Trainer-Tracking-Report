import { TestBed } from '@angular/core/testing';

import { TrainerCourseServiceService } from './trainer-course-service.service';

describe('TrainerCourseServiceService', () => {
  let service: TrainerCourseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainerCourseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
