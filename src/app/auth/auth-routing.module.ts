import { AuthActivate } from './../shared/guards/auth.activate';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent,
    canActivate: [AuthActivate],
    data: { title: 'Login', loginRequired: false },
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
    canActivate: [AuthActivate],
    data: { title: 'Register', loginRequired: false },
  },
  {
    path: 'auth/logout',
    component: LogoutComponent,
    canActivate: [AuthActivate],
    data: { title: 'Logout', loginRequired: true },
  },
  {
    path: 'auth/profile',
    component: ProfileComponent,
    canActivate: [AuthActivate],
    data: { title: 'Profile', loginRequired: true },
  },
];

// const sameRoutes: Routes = [
//     {
//         path: 'auth',
//         children: [
//             {
//                 path: 'login',
//                 component: LoginComponent
//             },
//             {
//                 path: 'register',
//                 component: RegisterComponent
//             },
//             {
//                 path: 'logout',
//                 component: LogoutComponent
//             },
//             {
//                 path: 'profile',
//                 component: ProfileComponent
//             }
//         ]
//     }
// ]

export const AuthRouterModule = RouterModule.forChild(routes);
