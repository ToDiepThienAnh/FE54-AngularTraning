import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { WhatdoComponent } from './whatdo/whatdo.component';
import { ContactComponent } from './contact/contact.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { FooterComponent } from './footer/footer.component';
import { Baitap2Component } from './baitap2.component';



@NgModule({
  declarations: [HeaderComponent, CarouselComponent, WhatdoComponent, ContactComponent, ProductlistComponent, FooterComponent, Baitap2Component],
  imports: [
    CommonModule
  ],
  exports: [Baitap2Component],
})
export class Baitap2Module { }
