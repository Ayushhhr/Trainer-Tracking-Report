import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTopicDetailsComponent } from './course-topic-details.component';

describe('CourseTopicDetailsComponent', () => {
  let component: CourseTopicDetailsComponent;
  let fixture: ComponentFixture<CourseTopicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseTopicDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseTopicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
