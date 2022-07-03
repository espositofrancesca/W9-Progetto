export class Task {
  id: number = 1
  title: string;
  completed:boolean = true

  constructor(id:number, title: string, completed:boolean ){
    this.id = id;
    this.title = title;
    this.completed = completed

  }
}
