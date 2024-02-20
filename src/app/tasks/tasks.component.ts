import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: any[] = [];
  username: string = 'exampleUser';

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

  // Implement similar methods for addTask, deleteTask, completeTask, and resetTasks
}
