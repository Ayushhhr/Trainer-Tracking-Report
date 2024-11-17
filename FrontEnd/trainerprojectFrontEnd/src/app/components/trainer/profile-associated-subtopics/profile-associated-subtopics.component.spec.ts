import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAssociatedSubtopicsComponent } from './profile-associated-subtopics.component';

describe('ProfileAssociatedSubtopicsComponent', () => {
  let component: ProfileAssociatedSubtopicsComponent;
  let fixture: ComponentFixture<ProfileAssociatedSubtopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileAssociatedSubtopicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileAssociatedSubtopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
