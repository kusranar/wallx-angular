import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTraderComponent } from './home-trader.component';

describe('HomeTraderComponent', () => {
  let component: HomeTraderComponent;
  let fixture: ComponentFixture<HomeTraderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTraderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
