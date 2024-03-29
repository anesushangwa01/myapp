import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details'
      },
      // {path: '**', component: PageNotFoundComponent}
      { path: '**', redirectTo: '/page-not-found', pathMatch: 'full'}
];

