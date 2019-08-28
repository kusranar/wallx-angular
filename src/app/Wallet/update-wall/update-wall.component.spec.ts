import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWallComponent } from './update-wall.component';

describe('UpdateWallComponent', () => {
  let component: UpdateWallComponent;
  let fixture: ComponentFixture<UpdateWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
