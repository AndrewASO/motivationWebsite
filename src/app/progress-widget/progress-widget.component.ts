import { Component } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-progress-widget',
  templateUrl: './progress-widget.component.html',
  styleUrls: ['./progress-widget.component.css']
})
export class ProgressWidgetComponent {
  progressItems = [
    { label: 'Year', value: 50 },
    { label: 'Month', value: 18 },
    { label: 'Week', value: 37 },
    { label: 'Day', value: 44 }
  ];

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  toggleNightMode() {
    this.renderer.addClass(this.document.body, 'night-mode');
    // Or this.renderer.removeClass to turn off night mode
  }
}
