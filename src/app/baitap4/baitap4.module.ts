import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap4Component } from './baitap4.component';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [Baitap4Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[Baitap4Component],
})
export class Baitap4Module { }
