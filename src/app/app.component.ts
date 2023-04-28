import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';


  allTodo:string[]=[]
 
 addTodo(todo:string){
  this.allTodo.push(todo)
  console.log(todo);
}
}