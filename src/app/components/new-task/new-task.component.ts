import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/classes/task';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})



export class NewTaskComponent implements OnInit {
  id : number = 0
  title!: string;
  complete : boolean = false

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  addTask() : void{
    setTimeout(() => {
      let obj = new Task (this.id++, this.title, this.complete)
    this.todosService.addTask(obj)
    this.title = ''
    }, 2000)
  }

}
