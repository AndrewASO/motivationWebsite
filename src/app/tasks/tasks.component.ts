import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TasksService } from '../services/tasks.service';
import { AuthState } from '../auth/auth.state';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: any[] = [];
  newTaskDescription: string = '';
  username: string | null = null; // Initialize username as null

  constructor(private tasksService: TasksService, private store: Store<{ auth: AuthState }>) {
    this.store.select(state => state.auth.username).subscribe(username => {
      this.username = username; // Update username when it changes
    });
  }

  ngOnInit(): void {
    // Retrieve username from localStorage
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
      this.loadTasks();
    } else {
      // Handle case where username is not found, e.g., user not logged in
    }
  }

  loadTasks(): void {
    if (this.username) { // Ensure username is not null
      this.tasksService.getTasks(this.username).subscribe({
        next: (data) => (this.tasks = data),
        error: (error) => console.error(error),
      });
    }
  }

  addTask(): void {
    if (this.username) {
      this.tasksService.addTask(this.username, this.newTaskDescription).subscribe({
        next: () => {
          this.loadTasks();
          this.newTaskDescription = ''; // Reset the input
        },
        error: (error) => console.error(error),
      });
    }
  }

  deleteTask(taskDescription: string): void {
    if (this.username) {
      this.tasksService.deleteTask(this.username, taskDescription).subscribe({
        next: () => this.loadTasks(),
        error: (error) => console.error(error),
      });
    }
  }
  
  completeTask(taskDescription: string): void {
    if (this.username) {
      this.tasksService.completeTask(this.username, taskDescription).subscribe({
        next: () => this.loadTasks(),
        error: (error) => console.error(error),
      });
    }
  }
  
  resetTasks(): void {
    if (this.username) {
      this.tasksService.resetTasks(this.username).subscribe({
        next: () => this.loadTasks(),
        error: (error) => console.error(error),
      });
    }
  }
  
}
