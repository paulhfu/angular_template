import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarW1Component } from './nav-bar-w1.component';

describe('NavBarW1Component', () => {
  let component: NavBarW1Component;
  let fixture: ComponentFixture<NavBarW1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarW1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarW1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
