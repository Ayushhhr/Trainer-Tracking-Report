import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchTrainerDetailsComponent } from './batch-trainer-details.component';

describe('BatchTrainerDetailsComponent', () => {
  let component: BatchTrainerDetailsComponent;
  let fixture: ComponentFixture<BatchTrainerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatchTrainerDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BatchTrainerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
