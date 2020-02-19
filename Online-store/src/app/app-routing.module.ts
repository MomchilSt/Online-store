import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent},
];

export const AppRoutingModule = RouterModule.forRoot(routes, {
  enableTracing: false
});
