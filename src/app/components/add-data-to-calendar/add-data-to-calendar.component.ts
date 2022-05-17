import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-data-to-calendar',
  templateUrl: './add-data-to-calendar.component.html',
  styleUrls: ['./add-data-to-calendar.component.scss']
})
export class AddDataToCalendarComponent implements OnInit {

  public addDataForm: FormGroup;
  public period;
  public periods = [];
  public hours = [];
  public minutes = [];

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.addDataForm = this.fb.group({
      date: new FormControl((new Date()).toISOString().substring(0, 10)),
      startHour: ['00'],
      startMinute: ['00'],
      endHour: ['00'],
      endMinute: ['00'],
    });

    for (let i = 0; i <= 23; i++) {
      let hour = String(i);

      if (i <= 9) {
        hour = '0' + hour;
      }

      this.hours.push(hour);
    }

    for (let i = 0; i <= 59; i++) {
      let minute = String(i);

      if (i <= 9) {
        minute = '0' + minute;
      }

      this.minutes.push(minute);
    }
  }

  addPeriod() {
    const value = this.addDataForm.value;
    this.period = value.startHour + ' : ' + value.startMinute + ' – ' + value.endHour + ' : ' + value.endMinute;
    this.periods.push(this.period);
  }

  onRemove(index) {
    if (index > -1) {
      this.periods.splice(index, 1);
    }
  }

  onSubmit() {
    const valueDate = this.addDataForm.value.date;
    // console.log(valueDate, this.periods);
  }

}
