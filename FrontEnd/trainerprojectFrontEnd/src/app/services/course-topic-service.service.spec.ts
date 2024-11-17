import { TestBed } from '@angular/core/testing';

import { CourseTopicServiceService } from './course-topic-service.service';

describe('CourseTopicServiceService', () => {
  let service: CourseTopicServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseTopicServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
