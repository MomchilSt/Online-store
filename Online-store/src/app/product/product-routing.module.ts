import { CreateComponent } from './create/create.component';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';

const routes: Routes = [
    //{ path: '', redirectTo: 'create' },
    { path: 'create', component: CreateComponent },
    { path: 'all-products', component: AllProductsComponent },
];

export const ProductRoutingModule = RouterModule.forChild(routes);
