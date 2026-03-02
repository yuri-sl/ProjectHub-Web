import { Routes } from '@angular/router';
import { Login } from './login/login';
import { App } from './app';

//Aqui são definidas as rotas globais da aplicação.
export const routes: Routes = [
    {
        path:'login',
        component:Login
    },
    { path: '', loadChildren: () => import('./template/template-module').then(m => m.TemplateModule) },
    { path: '**', redirectTo: '' }
];
