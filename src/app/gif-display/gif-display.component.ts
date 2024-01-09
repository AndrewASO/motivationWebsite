import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gif-display',
  templateUrl: './gif-display.component.html',
  styleUrls: ['./gif-display.component.css']
})
export class GifDisplayComponent {
  @Input() gifUrl?: string;
}
