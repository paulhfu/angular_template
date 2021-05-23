import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderW1Component } from './header-w1.component';

describe('HeaderW1Component', () => {
  let component: HeaderW1Component;
  let fixture: ComponentFixture<HeaderW1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderW1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderW1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
