import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
    data: { title: 'Not Found' },
  },
  {
    path: '**',
    redirectTo: '/not-found',
    data: { title: 'Not Found' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
