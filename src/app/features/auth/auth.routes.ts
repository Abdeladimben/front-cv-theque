import { Routes } from '@angular/router';
import { AuthViewComponent } from './view/auth-view.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component:AuthViewComponent,
    children:[
      {
        path: '',
        loadComponent: () => import('./component/login/login.component')
          .then(m => m.LoginComponent),
      }
    ]
  }
];
