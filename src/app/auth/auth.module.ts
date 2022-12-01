import { SharedModule } from './../shared/shared.module';
import { AuthRouterModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    AuthRouterModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
