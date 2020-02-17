import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [NavbarComponent, NavbarComponent],
  imports: [
    CommonModule, MaterialModule, FlexLayoutModule
  ],
  exports: [
    NavbarComponent,
  ]
})
export class CoreModule { }
