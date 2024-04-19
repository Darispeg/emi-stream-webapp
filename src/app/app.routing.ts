
import { Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const appRoutes: Route[] = [ 
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  // Apps routes
  {
      path: '',
      component: LayoutComponent,
      children: [
          { 
              path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) 
          }, 
          { 
              path: 'courses', loadChildren: () => import('./modules/courses/courses.module').then(m => m.CoursesModule) 
          },
          {
              path: '**',
              redirectTo: 'home'
          }
      ]
  }
];
