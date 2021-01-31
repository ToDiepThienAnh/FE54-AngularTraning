import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { BookingComponent } from './booking/booking.component';
import { LayoutComponent } from './layout/layout.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ComponentsModule } from '../components/components.module';
import { PipeModule } from '../pipe/pipe.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [HomeComponent, MoviedetailComponent, BookingComponent, LayoutComponent, SignupComponent, SigninComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    PipeModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class MainModule { }
