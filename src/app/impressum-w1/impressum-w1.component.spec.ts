import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressumW1Component } from './impressum-w1.component';

describe('ImpressumW1Component', () => {
  let component: ImpressumW1Component;
  let fixture: ComponentFixture<ImpressumW1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpressumW1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressumW1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
