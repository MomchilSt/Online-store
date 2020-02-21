import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';

const routes: Routes = [
    { path: 'create', component: CreateComponent },
    { path: 'all-products', component: AllProductsComponent },
    { path: 'details/:id', component: DetailsComponent }
];

export const ProductRoutingModule = RouterModule.forChild(routes);
