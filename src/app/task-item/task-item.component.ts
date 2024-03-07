import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../tasks/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: any; // Allow task to be optional and initialize as null
  @Input() editMode: boolean = false;
  @Output() toggleTaskCompletion = new EventEmitter<string>();
  @Output() taskDeleted = new EventEmitter<string>();
  @Output() taskEdited = new EventEmitter<Task>();

  completeTask() {
    if (this.task) { // Check if task is not null
      this.toggleTaskCompletion.emit(this.task.id);
    }
  }

  onCheckboxChange(): void {
    if (this.task) {
      // Toggle task completion status
      this.task.completed = !this.task.completed;
      // Emit an event for the parent component to handle the update
      this.toggleTaskCompletion.emit(this.task.id);
    }
  }
  
  
  
  
  deleteTask() {
    // Delete logic, potentially with confirmation
    if (this.task && this.editMode && confirm('Confirm delete?')) {
      this.taskDeleted.emit(this.task.id);
    }
  }

}
