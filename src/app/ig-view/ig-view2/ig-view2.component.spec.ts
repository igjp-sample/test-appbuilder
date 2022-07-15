import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgView2Component } from './ig-view2.component';

describe('IgView2Component', () => {
  let component: IgView2Component;
  let fixture: ComponentFixture<IgView2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgView2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
