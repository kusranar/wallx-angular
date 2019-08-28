import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisAccComponent } from './regis-acc.component';

describe('RegisAccComponent', () => {
  let component: RegisAccComponent;
  let fixture: ComponentFixture<RegisAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
