import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneProfileComponent } from './one-profile.component';

describe('OneProfileComponent', () => {
  let component: OneProfileComponent;
  let fixture: ComponentFixture<OneProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
