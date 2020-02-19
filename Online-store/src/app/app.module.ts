import { ProductModule } from './product/product.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
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
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { CreateComponent } from './product/create/create.component';
import { ProductRoutingModule } from './product/product-routing.module';

@NgModule({
  declarations: [
    AppComponent,
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
    ProductRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
