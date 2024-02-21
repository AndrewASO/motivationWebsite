import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: any[] = []; // Replace 'any' with your task model
  newTaskDescription: string = '';
  username: string = 'exampleUser'; // This should be dynamically set based on the logged-in user

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasksService.getTasks(this.username).subscribe({
      next: (data) => (this.tasks = data),
      error: (error) => console.error(error),
    });
  }

  addTask(): void {
    this.tasksService.addTask(this.username, this.newTaskDescription).subscribe({
      next: () => {
        this.loadTasks();
        this.newTaskDescription = ''; // Reset the input
      },
      error: (error) => console.error(error),
    });
  }

  deleteTask(taskDescription: string): void {
    this.tasksService.deleteTask(this.username, taskDescription).subscribe({
      next: () => this.loadTasks(),
      error: (error) => console.error(error),
    });
  }

  completeTask(taskDescription: string): void {
    this.tasksService.completeTask(this.username, taskDescription).subscribe({
      next: () => this.loadTasks(),
      error: (error) => console.error(error),
    });
  }

  resetTasks(): void {
    this.tasksService.resetTasks(this.username).subscribe({
      next: () => this.loadTasks(),
      error: (error) => console.error(error),
    });
  }
}
