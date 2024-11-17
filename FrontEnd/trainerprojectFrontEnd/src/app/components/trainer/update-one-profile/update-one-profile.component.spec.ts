import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOneProfileComponent } from './update-one-profile.component';

describe('UpdateOneProfileComponent', () => {
  let component: UpdateOneProfileComponent;
  let fixture: ComponentFixture<UpdateOneProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateOneProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateOneProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
