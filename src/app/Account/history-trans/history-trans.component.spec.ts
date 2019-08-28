import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTransComponent } from './history-trans.component';

describe('HistoryTransComponent', () => {
  let component: HistoryTransComponent;
  let fixture: ComponentFixture<HistoryTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
