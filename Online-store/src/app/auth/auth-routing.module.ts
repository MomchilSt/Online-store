import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InnerGuard } from './../shared/guards/inner.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: LoginComponent,
                canActivate: [InnerGuard]
            },
            {
                path: 'register',
                component: RegisterComponent,
                canActivate: [InnerGuard]
            }
        ]
    }
];
export const AuthRoutingModule = RouterModule.forChild(routes);
