import {Component, Input, input, InputSignal, output} from '@angular/core';
import { Task } from './task.model';
import {CardComponent} from '../shared/card/card.component';
import {DatePipe} from '@angular/common';
import {TaskService} from './task.service';

@Component({
  selector: 'app-task',
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // task:InputSignal<Task> = input.required<Task>();
  task = input.required<Task>();
  // completedTask = output<string>();
  constructor(private taskService: TaskService) {
  }

  completeTask() {
    // this.completedTask.emit(this.task().id)
    this.taskService.completeTask(this.task().id)
  }
}
