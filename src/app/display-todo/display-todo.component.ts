import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.css']
})
export class DisplayTodoComponent {
  @Input() allTodo:string[]=[]
}
