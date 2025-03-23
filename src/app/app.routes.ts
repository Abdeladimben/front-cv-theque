import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { LoginComponent } from './features/auth/component/login/login.component';
import { AppNoLayoutComponent } from './layout/app.no-layout.component';

export const routes: Routes = [
    {path:'', redirectTo: 'auth',pathMatch:"full"},
    {
        path: 'auth',
        component: AppLayoutComponent,
        loadChildren: () => import('./features/auth/auth.routes')
            .then(m => m.AUTH_ROUTES)
    },
    {
        path: 'auth2',
        component: AppNoLayoutComponent,
        loadChildren: () => import('./features/auth/auth.routes')
            .then(m => m.AUTH_ROUTES)
    }
];
