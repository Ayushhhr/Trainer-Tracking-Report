import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneBatchDetailsComponent } from './one-batch-details.component';

describe('OneBatchDetailsComponent', () => {
  let component: OneBatchDetailsComponent;
  let fixture: ComponentFixture<OneBatchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneBatchDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneBatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
