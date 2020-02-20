import { AllStoresComponent } from './all-stores/all-stores.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    //{ path: '', redirectTo: 'create' },
    { path: 'create-store', component: CreateStoreComponent },
    { path: 'all-stores', component: AllStoresComponent },
];

export const StoreRoutingModule = RouterModule.forChild(routes);
