import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/interface/todo';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.scss']
})
export class CompletedTaskComponent implements OnInit {
  tasks !: ITodo[]

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.tasks = this.todosService.getCompleteList()
  }

}
