import { MainComponent } from './main/main.component';
import { ThemeDetailComponent } from './theme-detail/theme-detail.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { RouterModule, Routes } from '@angular/router';
import { ThemeResolver } from './resolvers/theme.resolver';

const routes: Routes = [
  {
    path: 'recent',
    component: MainComponent,
  },
  {
    path: 'new',
    component: NewThemeComponent,
    data: { title: 'New theme' },
  },
  {
    path: 'detail/:id',
    component: ThemeDetailComponent,
    data: { title: 'Theme detail' },
    resolve: {
      theme: ThemeResolver,
    },
  },
];

export const ThemeRoutingModule = RouterModule.forChild(routes);
