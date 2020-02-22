import { AuthGuard } from './../shared/guards/auth.guard';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';

const routes: Routes = [
    { path: 'create', component: CreateComponent, canActivate: [AuthGuard] },
    { path: 'all-products', component: AllProductsComponent, canActivate: [AuthGuard] },
    { path: 'details/:id', component: DetailsComponent, canActivate: [AuthGuard] }
];

export const ProductRoutingModule = RouterModule.forChild(routes);
