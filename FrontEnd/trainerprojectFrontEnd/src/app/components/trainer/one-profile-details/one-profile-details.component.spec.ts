import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneProfileDetailsComponent } from './one-profile-details.component';

describe('OneProfileDetailsComponent', () => {
  let component: OneProfileDetailsComponent;
  let fixture: ComponentFixture<OneProfileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneProfileDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
