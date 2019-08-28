import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupAcctoTraderComponent } from './topup-accto-trader.component';

describe('TopupAcctoTraderComponent', () => {
  let component: TopupAcctoTraderComponent;
  let fixture: ComponentFixture<TopupAcctoTraderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopupAcctoTraderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupAcctoTraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
