import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxSelectModule, IgxInputGroupModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxGridModule } from 'igniteui-angular';
import { IgViewComponent } from './ig-view.component';

describe('IgViewComponent', () => {
  let component: IgViewComponent;
  let fixture: ComponentFixture<IgViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgViewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxSelectModule, IgxInputGroupModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxGridModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
