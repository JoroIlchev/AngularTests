import {Component, computed, EventEmitter, input, Input, output, Output, signal} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';
import {CardComponent} from '../shared/card/card.component';


const randomizer = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // user = signal( DUMMY_USERS[randomizer]);
  // imgPath = computed(() => "/" + this.user().avatar);

  // get imgPath() {
  //   return "/" + this.user().avatar;
  // }
  // @Output() selected = new EventEmitter();
  user = input.required<any>()
  imgPath = computed(() => "/" + this.user().avatar)
  selected = output<string>();
  hasToSetActiveClass = input.required<boolean>();


  onClick() {
    // const randomizer = Math.floor(Math.random() * DUMMY_USERS.length)
    // this.user.set(DUMMY_USERS[randomizer]);
    // console.log("Clicked! " + this.user().id);
    this.selected.emit(this.user());
  }
}
