import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CompletatiPage } from './pages/completati/completati.page';
import { TodosPage } from './pages/todos/todos.page';

import { HeaderComponent } from './components/header/header.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { FormsModule } from '@angular/forms';
import { CompletedTaskComponent } from './components/completed-task/completed-task.component';
import { LoadNewTaskComponent } from './components/load-new-task/load-new-task.component';
import { LoadCompletedTaskComponent } from './components/load-completed-task/load-completed-task.component';
import { NewTaskComponent } from './components/new-task/new-task.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListTaskComponent,
    CompletedTaskComponent,
    CompletatiPage,
    TodosPage,
    LoadNewTaskComponent,
    LoadCompletedTaskComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
