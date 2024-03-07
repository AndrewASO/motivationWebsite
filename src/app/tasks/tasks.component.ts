import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TasksService } from '../services/tasks.service';
import { AuthState } from '../auth/auth.state';
import { Task } from './task.model'; // Adjust the path as necessary

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  groupedTasks: { [key: string]: Task[] } = { yearly: [], monthly: [], weekly: [], daily: [] };
  newTaskDescription: string = '';
  newTaskUrgency: string = 'daily'; // Default urgency
  username: string | null = null;
  editMode: boolean = false;

  constructor(private tasksService: TasksService, private store: Store<{ auth: AuthState }>) {
    this.store.select(state => state.auth.username).subscribe(username => {
      this.username = username;
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
    if (this.username) {
      this.tasksService.getTasks(this.username).subscribe({
        next: (data: Task[]) => {
          this.tasks = data;
          this.groupTasksByUrgency();
        },
        error: (error) => console.error(error),
      });
    }
  }

  groupTasksByUrgency(): void {
    // Reset groupedTasks to ensure it starts fresh on each call
    this.groupedTasks = { yearly: [], monthly: [], weekly: [], daily: [] };
    
    // Populate groupedTasks based on task urgency
    this.tasks.forEach(task => {
      if (this.groupedTasks[task.urgency]) {
        this.groupedTasks[task.urgency].push(task);
      }
    });
  }

  
  addTask(): void {
    if (this.username && this.newTaskDescription) {
      this.tasksService.addTask(this.username, this.newTaskDescription, this.newTaskUrgency).subscribe({
        next: (task) => {
          // Assuming the backend returns the full task object
          this.tasks.push(task); // Add this new task to your local tasks array
          this.newTaskDescription = ''; // Reset the input field
          this.newTaskUrgency = 'daily';
          this.groupTasksByUrgency(); // Update categories with the new task
          this.loadTasks();
        },
        error: (error) => console.error(error),
      });
    }
  }

  toggleTaskCompletion(taskId: string): void {
    if (this.username) {
      this.tasksService.toggleTaskCompletion(this.username, taskId).subscribe({
        next: () => {
          this.loadTasks(); // Reload tasks to reflect completion status
        },
        error: (error) => console.error(`Error toggling task completion for taskId: ${taskId}`, error),
      });
    }
  }


  deleteTask(taskId: string): void {
    if (this.username) {
      this.tasksService.deleteTask(this.username, taskId).subscribe({
        next: () => this.loadTasks(), // Reload tasks to reflect the deletion
        error: (error) => console.error(error),
      });
    }
  }

  resetTasks(): void {
    if (this.username) {
      this.tasksService.resetTasks(this.username).subscribe({
        next: () => this.loadTasks(), // Reload tasks to reflect the reset
        error: (error) => console.error(error),
      });
    }
  }
}



