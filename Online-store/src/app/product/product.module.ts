import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';
import { AllProductsComponent } from './all-products/all-products.component';


@NgModule({
  declarations: [ CreateComponent, AllProductsComponent],
  imports: [
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    RouterModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
