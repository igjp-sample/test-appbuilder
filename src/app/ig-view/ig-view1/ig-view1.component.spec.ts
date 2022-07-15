import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgView1Component } from './ig-view1.component';

describe('IgView1Component', () => {
  let component: IgView1Component;
  let fixture: ComponentFixture<IgView1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgView1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
