import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../tasks/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: any; // Replace 'any' with your Task model
  @Output() taskCompleted = new EventEmitter<string>();
  @Output() taskDeleted = new EventEmitter<string>();

  completeTask() {
    this.taskCompleted.emit(this.task.description);
  }
  
  deleteTask() {
    this.taskDeleted.emit(this.task.description);
  }
}
