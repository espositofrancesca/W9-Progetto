import { Injectable } from '@angular/core';
import { ITodo } from '../interface/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  tasks!: boolean ;


  private tasklist: ITodo[] = []
  private completedTask: ITodo[] = []

  constructor() { }

//metodi per leggere
  getTaskList(): ITodo[] {
    return this.tasklist;
  }

  getCompleteList(): ITodo[] {
    return this.completedTask;
  }

  //metodo per rimuovere e pushare dentro array completati
  completeTask(task: ITodo ): void{
    let index = this.tasklist.indexOf(task);
    this.tasklist.splice(index, 1)
    /* console.log(index);
    console.log(tasks); */
    this.completedTask.push(task);
    task.completed = true;
   /*  console.log(this.completedTask); */
  }

  //metodo per aggiungere task
  addTask(task: ITodo):void{
      this.tasklist.push(task)
  }

  deleteTask(task: ITodo) : void{
    let index = this.tasklist.indexOf(task);
    this.tasklist.splice(index, 1)
  }

}
