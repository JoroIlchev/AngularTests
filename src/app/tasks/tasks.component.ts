import {Component, input, signal} from '@angular/core';
import {TaskComponent} from './task.component';
import {DUMMY_TASKS} from './dummy-tasks';
import {Task} from './task.model';
import {NewTaskComponent} from './new-task/new-task.component';
import {TaskService} from './task.service';


@Component({
  selector: 'app-tasks',
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  user = input.required<any>();

  showAddTask = false;
  private taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }


  get userTasksFunc(): Task [] {
    // console.log(this.tasks.find(task => task.userId === this.user().id));
    // console.log(this.user().id);
    // return this.tasks.find((task) => task.userId === this.user().id);
    return this.taskService.getAllTasks();
  }

  // deleteCompletedTask(id: string) {
  //   console.log("Deleted :" + id);
  //   this.taskService.completeTask(id);
  // }

  addTaskDialogOpen() {
    this.showAddTask = true;
  }

  onAddTaskCancel() {
    this.showAddTask = false;
  }
}

