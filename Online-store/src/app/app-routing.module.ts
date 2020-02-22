import { NotFoundComponent } from './core/not-found/not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { InnerGuard } from './shared/guards/inner.guard';
import { ProfileComponent } from './user/profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { DetailsComponent } from './product/details/details.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes, {
  enableTracing: false
});
