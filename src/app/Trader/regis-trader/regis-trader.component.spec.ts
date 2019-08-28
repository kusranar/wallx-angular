import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisTraderComponent } from './regis-trader.component';

describe('RegisTraderComponent', () => {
  let component: RegisTraderComponent;
  let fixture: ComponentFixture<RegisTraderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisTraderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisTraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
