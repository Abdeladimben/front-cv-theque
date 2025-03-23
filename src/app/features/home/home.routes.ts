import { Routes } from '@angular/router';
import { HomeViewComponent } from './view/home-view.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component:HomeViewComponent,
    children:[
      {
        path: '',
        loadComponent: () => import('./component/table/table.component')
          .then(m => m.LoginComponent),
      }
    ]
  }
];
