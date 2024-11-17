import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeFeaturesComponent } from './awesome-features.component';

describe('AwesomeFeaturesComponent', () => {
  let component: AwesomeFeaturesComponent;
  let fixture: ComponentFixture<AwesomeFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AwesomeFeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwesomeFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
