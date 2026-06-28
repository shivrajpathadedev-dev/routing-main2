import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FairsComponent } from './component/fairs/fairs.component';
import { HomeComponent } from './component/home/home.component';
import { ProductDashboardComponent } from './component/product-dashboard/product-dashboard.component';
import { UsersComponent } from './component/users/users.component';
import { ProductComponent } from './component/product-dashboard/product/product.component';
import { ProductFormComponent } from './component/product-dashboard/product-form/product-form.component';
import { GetConfirmComponent } from './component/get-confirm/get-confirm.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FairsComponent,
    HomeComponent,
    ProductDashboardComponent,
    UsersComponent,
    ProductComponent,
    ProductFormComponent,
    GetConfirmComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
