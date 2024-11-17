import { TestBed } from '@angular/core/testing';

import { TopicSubtopicServiceService } from './topic-subtopic-service.service';

describe('TopicSubtopicServiceService', () => {
  let service: TopicSubtopicServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopicSubtopicServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
