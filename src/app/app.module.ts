import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ThemeModule } from './theme/theme.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthModule,
    ThemeModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
