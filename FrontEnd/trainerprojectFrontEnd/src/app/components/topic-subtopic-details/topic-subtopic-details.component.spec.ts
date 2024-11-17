import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicSubtopicDetailsComponent } from './topic-subtopic-details.component';

describe('TopicSubtopicDetailsComponent', () => {
  let component: TopicSubtopicDetailsComponent;
  let fixture: ComponentFixture<TopicSubtopicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicSubtopicDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopicSubtopicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
