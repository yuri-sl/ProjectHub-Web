import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Login } from '../login/login';
import { Home } from './pages/home/home';

//Aqui são definidas todas as rotas que obedecem a esse modulo
const routes: Routes = [
  {
    path:'paginas',
    component:Layout,
    children: [
      {path:'home',component:Home}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
