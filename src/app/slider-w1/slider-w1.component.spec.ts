import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderW1Component } from './slider-w1.component';

describe('SliderW1Component', () => {
  let component: SliderW1Component;
  let fixture: ComponentFixture<SliderW1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderW1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderW1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
