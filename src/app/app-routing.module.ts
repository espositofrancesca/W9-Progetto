import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletatiPage } from './pages/completati/completati.page';
import { TodosPage } from './pages/todos/todos.page';

const routes: Routes = [
  {
    path: 'todos',
    component: TodosPage
  },
  {
    path: 'completati',
    component:CompletatiPage
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todos'
  },
  {
    path: '**',
    component: TodosPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
