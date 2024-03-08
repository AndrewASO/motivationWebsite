import { Component, OnInit } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TasksService } from '../services/tasks.service';
import { Store } from '@ngrx/store'; // Assuming you're using @ngrx/store
import { AuthState } from '../auth/auth.state';

@Component({
  selector: 'app-progress-widget',
  templateUrl: './progress-widget.component.html',
  styleUrls: ['./progress-widget.component.css']
})
export class ProgressWidgetComponent implements OnInit {
  progressItems = [
    { label: 'Year', value: 0 },
    { label: 'Month', value: 0 },
    { label: 'Week', value: 0 },
    { label: 'Day', value: 0 }
  ];
  private username: string | null = null;

  constructor(private tasksService: TasksService, private store: Store<{ auth: AuthState }>, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    // Retrieve username from Store or localStorage
    this.store.select(state => state.auth.username).subscribe(username => {
      this.username = username || localStorage.getItem('username');
      if (this.username) {
        this.loadCompletionPercentages();
      } else {
        // User not logged in, keep progress values at 0
      }
    });
  }

  loadCompletionPercentages(): void {
    const urgencies = ['yearly', 'monthly', 'weekly', 'daily'];
    urgencies.forEach((urgency, index) => {
      this.tasksService.getCompletionPercentage(this.username!, urgency).subscribe({
        next: (response) => {
          // Assuming the API response structure is { urgency: string, completionPercentage: number }
          this.progressItems[index].value = response.completionPercentage;
        },
        error: (error) => {
          console.error('Error loading completion percentage:', error);
          this.progressItems[index].value = 0; // Fallback to 0 in case of error
        }
      });
    });
  }

  toggleNightMode() {
    this.renderer.addClass(this.document.body, 'night-mode');
    // Or this.renderer.removeClass to turn off night mode
  }
}
