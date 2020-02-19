import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { AuthModule } from './../auth/auth.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [NavbarComponent, NavbarComponent, HomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AuthModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
  ]
})
export class CoreModule { }
