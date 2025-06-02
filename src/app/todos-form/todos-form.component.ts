import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.scss']
})
export class TodosFormComponent implements OnInit {

  constructor(private todoService: TodosService) { }

  addTodo(todo: string) {
    this.todoService.addTodo(todo);
  }
  

  ngOnInit(): void {
  }

}
