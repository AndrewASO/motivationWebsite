import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testWebsite';

  toggleNightMode() {
    document.body.classList.toggle('night-mode');
  }
}
