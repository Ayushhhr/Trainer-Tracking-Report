import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchwiseTrainerSubtopicsComponent } from './batchwise-trainer-subtopics.component';

describe('BatchwiseTrainerSubtopicsComponent', () => {
  let component: BatchwiseTrainerSubtopicsComponent;
  let fixture: ComponentFixture<BatchwiseTrainerSubtopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatchwiseTrainerSubtopicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BatchwiseTrainerSubtopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
