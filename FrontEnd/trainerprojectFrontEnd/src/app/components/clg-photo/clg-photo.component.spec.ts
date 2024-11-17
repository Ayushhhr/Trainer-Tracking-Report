import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClgPhotoComponent } from './clg-photo.component';

describe('ClgPhotoComponent', () => {
  let component: ClgPhotoComponent;
  let fixture: ComponentFixture<ClgPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClgPhotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClgPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
