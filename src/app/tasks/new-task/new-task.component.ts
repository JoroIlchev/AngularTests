import {Component, EventEmitter, input, Output, output, signal} from '@angular/core';
import {Task} from '../task.model';
import {FormsModule} from '@angular/forms';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  close = output();
  userId = input<string>();
  title=signal("");
  summary=signal("");
  dueDate=signal("");

  constructor(private taskService: TaskService) {
  }


  onCancelClicked() {
    this.close.emit();
  }

  addTask() {
    const task: Task = {id: new Date().getDate().valueOf().toString(), summary: this.summary(), userId: this.userId(), title: this.title(), dueDate: this.dueDate()};
    this.taskService.addTask(task);
    this.onCancelClicked();
  }

}
