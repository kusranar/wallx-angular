import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeForexComponent } from './home-forex.component';

describe('HomeForexComponent', () => {
  let component: HomeForexComponent;
  let fixture: ComponentFixture<HomeForexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeForexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeForexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
