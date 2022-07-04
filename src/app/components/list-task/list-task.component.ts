import { Component, DoCheck, OnInit } from '@angular/core';
import { ITodo } from 'src/app/interface/todo';
import { TodosService } from 'src/app/service/todos.service';


@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {

  tasks !: ITodo[]


  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.tasks = this.todosService.getTaskList()
  }


  removeTask(task: ITodo) {

    setTimeout(() => {
      this.todosService.completeTask(task)
    }, 2000)
  }

  deleteTask(task: ITodo) {

    setTimeout(() => {
      this.todosService.deleteTask(task)
    }, 2000)
  }

}


