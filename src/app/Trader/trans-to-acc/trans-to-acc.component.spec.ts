import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransToAccComponent } from './trans-to-acc.component';

describe('TransToAccComponent', () => {
  let component: TransToAccComponent;
  let fixture: ComponentFixture<TransToAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransToAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransToAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
