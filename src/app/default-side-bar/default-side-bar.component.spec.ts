import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSideBarComponent } from './default-side-bar.component';

describe('DefaultSideBarComponent', () => {
  let component: DefaultSideBarComponent;
  let fixture: ComponentFixture<DefaultSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
