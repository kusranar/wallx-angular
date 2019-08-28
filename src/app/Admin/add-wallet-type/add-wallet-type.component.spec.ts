import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWalletTypeComponent } from './add-wallet-type.component';

describe('AddWalletTypeComponent', () => {
  let component: AddWalletTypeComponent;
  let fixture: ComponentFixture<AddWalletTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWalletTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWalletTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
