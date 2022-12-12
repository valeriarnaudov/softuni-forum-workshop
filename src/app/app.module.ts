import { BehaviorSubject } from 'rxjs';
import { API_ERROR } from './shared/constants';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ThemeModule } from './theme/theme.module';
import { appInterceptorProvider } from './app.interceoptor';
import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [appInterceptorProvider, {
    provide: API_ERROR,
    useValue: new BehaviorSubject(null)
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
