import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateStoreComponent } from './create-store/create-store.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';
import { StoreRoutingModule } from './store-routing.module';
import { AllStoresComponent } from './all-stores/all-stores.component';
import { StoreComponent } from './store/store.component';



@NgModule({
  declarations: [CreateStoreComponent, AllStoresComponent, StoreComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
