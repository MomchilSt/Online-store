import { ProfileComponent } from './user/profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { DetailsComponent } from './product/details/details.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'user/profile', component: ProfileComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes, {
  enableTracing: false
});
