import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from './dummy-users';
import {TaskComponent} from './task/task.component';
import {TasksComponent} from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TaskComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-ui';
  users = DUMMY_USERS;
  selectedUser: any = signal("");

  onClick(selected: any) {
    this.selectedUser.set(DUMMY_USERS.find(user => user.id === selected.id));

    console.log(this.selectedUser().name);
  }

   getUser() {
    return this.selectedUser();
  }
}
