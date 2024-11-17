import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriDirectorComponent } from './pri-director.component';

describe('PriDirectorComponent', () => {
  let component: PriDirectorComponent;
  let fixture: ComponentFixture<PriDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriDirectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
