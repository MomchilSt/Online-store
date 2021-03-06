import { StoreModule } from './store/store.module';
import { ProductModule } from './product/product.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { FirebaseModule } from './shared/firebase/firebase.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductRoutingModule } from './product/product-routing.module';
import { ProfileComponent } from './user/profile/profile.component';
import { LayoutModule } from '@angular/cdk/layout';
import { StoreRoutingModule } from './store/store-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AuthRoutingModule,
    AppRoutingModule,
    FirebaseModule,
    BrowserModule,
    CoreModule,
    FlexLayoutModule,
    SharedModule,
    AuthModule,
    ProductModule,
    ProductRoutingModule,
    StoreRoutingModule,
    StoreModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
