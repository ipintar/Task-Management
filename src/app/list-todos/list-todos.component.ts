import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];

  msg:string | undefined;

  constructor(
    private todoService:TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.todoService.retrieveAllTodos('user').subscribe(
      response =>{
        console.log(response)
        this.todos= response;
      }
    )
  }

  deleteTodo(id: any) {
    console.log(`delete todo ${id}` )
    this.todoService.deleteTodo(user, id).subscribe (
      response => {
        console.log(response);
        this.msg = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id:any) {
    this.router.navigate(['todos',id])
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('user').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  addTodo() {
    this.router.navigate(['todos',-1])
  }

}
function user(user: any, id: any) {
  throw new Error('Function not implemented.');
}

