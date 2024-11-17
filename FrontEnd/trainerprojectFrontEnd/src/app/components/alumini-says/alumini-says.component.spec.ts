import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminiSaysComponent } from './alumini-says.component';

describe('AluminiSaysComponent', () => {
  let component: AluminiSaysComponent;
  let fixture: ComponentFixture<AluminiSaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AluminiSaysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AluminiSaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
