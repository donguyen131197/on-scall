import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {UserRoutingModule}from './user-routing.module'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from './layout.component'
@NgModule({
  declarations: [
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  //bootstrap: [LayoutComponent]
})
export class UserModule { }
