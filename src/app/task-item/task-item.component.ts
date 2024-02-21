import { Component, EventEmitter, Input, Output } from '@angular/core';

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
    this.taskCompleted.emit(this.task.id);
  }

  deleteTask() {
    this.taskDeleted.emit(this.task.id);
  }
}
