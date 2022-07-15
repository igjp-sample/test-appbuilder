import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgView4Component } from './ig-view4.component';

describe('IgView4Component', () => {
  let component: IgView4Component;
  let fixture: ComponentFixture<IgView4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgView4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgView4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
