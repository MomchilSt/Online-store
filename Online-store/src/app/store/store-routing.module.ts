import { AuthGuard } from './../shared/guards/auth.guard';
import { AllStoresComponent } from './all-stores/all-stores.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'create-store', component: CreateStoreComponent, canActivate: [AuthGuard] },
    { path: 'all-stores', component: AllStoresComponent, canActivate: [AuthGuard] },
];

export const StoreRoutingModule = RouterModule.forChild(routes);
