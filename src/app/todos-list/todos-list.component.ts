import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  todoArray:any[] =[];
  constructor(private todoService: TodosService) { 

   
  }

  ngOnInit(): void {
    this.todoService.sendTodoListSub.subscribe(
     
      (data)=> {
        this.todoArray = data;
        console.log("submitted data");
        console.log(this.todoArray);

      }

    )
    this.todoService.emitTodoList();
  }

}
