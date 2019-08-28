import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisWallComponent } from './regis-wall.component';

describe('RegisWallComponent', () => {
  let component: RegisWallComponent;
  let fixture: ComponentFixture<RegisWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
