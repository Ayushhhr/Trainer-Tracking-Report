import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedSubtopicComponent } from './associated-subtopic.component';

describe('AssociatedSubtopicComponent', () => {
  let component: AssociatedSubtopicComponent;
  let fixture: ComponentFixture<AssociatedSubtopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssociatedSubtopicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssociatedSubtopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
