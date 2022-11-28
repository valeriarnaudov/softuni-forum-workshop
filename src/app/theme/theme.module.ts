import { SharedModule } from './../shared/shared.module';
import { ThemeRoutingModule } from './theme-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeDetailComponent } from './theme-detail/theme-detail.component';
import { MainComponent } from './main/main.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';

@NgModule({
  declarations: [
    ThemeListComponent,
    NewThemeComponent,
    MainComponent,
    ThemeDetailComponent,
    RecentPostsComponent,
  ],
  imports: [CommonModule, ThemeRoutingModule, SharedModule],
  exports: [ThemeListComponent],
})
export class ThemeModule {}
