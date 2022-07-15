import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgView5Component } from './ig-view5.component';

describe('IgView5Component', () => {
  let component: IgView5Component;
  let fixture: ComponentFixture<IgView5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgView5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgView5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
