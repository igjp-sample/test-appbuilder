import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgView6Component } from './ig-view6.component';

describe('IgView6Component', () => {
  let component: IgView6Component;
  let fixture: ComponentFixture<IgView6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgView6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgView6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
