import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos = [
    'task1',
    'task2',
    'task3'
  ];


  addTodo(todo: string) {
    this.todos.push(todo);
    this.emitTodoList();
  }

  getTodos() {
    return [...this.todos]; // Return a copy
  }

  sendTodoListSub = new BehaviorSubject<string[]>(this.todos);
  constructor() {
  }
  emitTodoList() {
    this.sendTodoListSub.next(this.todos);
  }




}
