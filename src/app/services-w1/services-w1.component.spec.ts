import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesW1Component } from './services-w1.component';

describe('ServicesW1Component', () => {
  let component: ServicesW1Component;
  let fixture: ComponentFixture<ServicesW1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesW1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesW1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
