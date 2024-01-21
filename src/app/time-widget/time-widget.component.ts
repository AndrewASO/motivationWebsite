import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-widget',
  templateUrl: './time-widget.component.html',
  styleUrls: ['./time-widget.component.css']
})
export class TimeWidgetComponent {
  currentTime = new Date();

  ngOnInit() {
    setInterval( () => {
      this.currentTime = new Date();
    }, 1000);
  }
}
