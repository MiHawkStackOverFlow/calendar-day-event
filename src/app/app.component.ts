import { Component, ViewEncapsulation } from '@angular/core';
import {
    MbscEventcalendarView,
    MbscCalendarEvent,
    setOptions

} from '@mobiscroll/angular';

setOptions({
    theme: 'ios',
    themeVariant: 'light',
    clickToCreate: true,
    dragToCreate: true,
    dragToMove: true,
    dragToResize: true
});

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  today = new Date().toISOString().split('T')[0] + 'T';

  myView: MbscEventcalendarView = {
    timeline: {
      type: 'day'
    }
  };

  myData = [
    {
      title: `Sample Item`,
      start: this.today + '02:00',
      end: this.today + '04:00',
      color: 'white',
    },
    {
      title: 'Sample Item',
      start: this.today + '05:00',
      end: this.today + '07:00',
      color: 'white',
    },
    {
      title: 'Sample Item',
      start: this.today + '06:00',
      end: this.today + '08:00',
      color: 'white',
    },
    {
      title: 'Sample Item',
      start: this.today + '07:30',
      end: this.today + '09:30',
      color: 'white',
    }
  ]

  ngAfterViewInit() {
    let header1: any = document.getElementsByClassName('mbsc-calendar-header')[0];
    header1.style.display = 'none';
  }

  ngAfterViewChecked() {
    let header2: any = document.getElementsByClassName('mbsc-schedule-header')[0];
    if (header2) { header2.style.display = 'none'; }

    let wrapper: any = document.getElementsByClassName('mbsc-schedule-all-day-wrapper')[0];
    if (wrapper) { wrapper.style.display = 'none'; }

    let gridScroll: any = document.getElementsByClassName('mbsc-schedule-grid-scroll')[0];
    if (gridScroll) { gridScroll.style.backgroundColor = "#DCDCDC" }

    let itemSideBars: any = document.getElementsByClassName('mbsc-schedule-event-bar');
    if (itemSideBars && itemSideBars.length > 0) {
        for (let i=0; i< itemSideBars.length; i++) {
          const element = itemSideBars[i];
          element.style.color = 'blue';
        }
    }

    let timeTexts: any = document.getElementsByClassName('mbsc-schedule-time');
    if (timeTexts && timeTexts.length > 0) {
        for (let i=0; i< timeTexts.length; i++) {
          const element = timeTexts[i];
          element.style.color = 'black';
          element.style.fontWeight = 700;
        }
    }
  }

}
