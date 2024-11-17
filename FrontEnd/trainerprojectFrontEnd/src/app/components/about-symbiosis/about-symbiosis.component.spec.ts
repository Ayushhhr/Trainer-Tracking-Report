import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSymbiosisComponent } from './about-symbiosis.component';

describe('AboutSymbiosisComponent', () => {
  let component: AboutSymbiosisComponent;
  let fixture: ComponentFixture<AboutSymbiosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutSymbiosisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutSymbiosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
