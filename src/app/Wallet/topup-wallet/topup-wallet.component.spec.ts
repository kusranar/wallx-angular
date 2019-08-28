import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopupWalletComponent } from './topup-wallet.component';

describe('TopupWalletComponent', () => {
  let component: TopupWalletComponent;
  let fixture: ComponentFixture<TopupWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopupWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopupWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
