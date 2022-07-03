import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/interface/todo';
import { TodosService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-load-completed-task',
  templateUrl: './load-completed-task.component.html',
  styleUrls: ['./load-completed-task.component.scss']
})
export class LoadCompletedTaskComponent implements OnInit {

  task: boolean = false;
  taskLoading: boolean = true;
  taskOk: boolean = false


  taskChecked !: ITodo[]

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.taskChecked = this.todosService.getCompleteList()
  }


  ngDoCheck(): void {
    if (this.taskChecked.length === 0){
      setTimeout(() => {
        this.task = true
        this.taskLoading = false
        this.taskOk = false
      }, 2000)
    } else {
      this.taskOk = true
      this.task = false;
      this.taskLoading = false
    }
  }
}

