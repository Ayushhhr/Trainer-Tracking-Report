import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedBatchesComponent } from './associated-batches.component';

describe('AssociatedBatchesComponent', () => {
  let component: AssociatedBatchesComponent;
  let fixture: ComponentFixture<AssociatedBatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssociatedBatchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssociatedBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
