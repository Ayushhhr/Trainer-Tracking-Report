import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubtopicComponent } from './update-subtopic.component';

describe('UpdateSubtopicComponent', () => {
  let component: UpdateSubtopicComponent;
  let fixture: ComponentFixture<UpdateSubtopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateSubtopicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateSubtopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
