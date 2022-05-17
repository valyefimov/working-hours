import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataToCalendarComponent } from './add-data-to-calendar.component';

describe('AddDataToCalendarComponent', () => {
  let component: AddDataToCalendarComponent;
  let fixture: ComponentFixture<AddDataToCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDataToCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataToCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
