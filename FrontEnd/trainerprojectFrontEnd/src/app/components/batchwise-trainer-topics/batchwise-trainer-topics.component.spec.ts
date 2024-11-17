import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchwiseTrainerTopicsComponent } from './batchwise-trainer-topics.component';

describe('BatchwiseTrainerTopicsComponent', () => {
  let component: BatchwiseTrainerTopicsComponent;
  let fixture: ComponentFixture<BatchwiseTrainerTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatchwiseTrainerTopicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BatchwiseTrainerTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
