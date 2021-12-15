import { Routes } from '@angular/router';
import { LoginComponent } from '@app/pages/login/login.component';
import { NotFoundComponent } from '@app/pages/not-found/not-found.component';
import { UsersComponent } from './pages/users/users.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
