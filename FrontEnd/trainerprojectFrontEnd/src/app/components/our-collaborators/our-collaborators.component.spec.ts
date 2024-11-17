import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCollaboratorsComponent } from './our-collaborators.component';

describe('OurCollaboratorsComponent', () => {
  let component: OurCollaboratorsComponent;
  let fixture: ComponentFixture<OurCollaboratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurCollaboratorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurCollaboratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
