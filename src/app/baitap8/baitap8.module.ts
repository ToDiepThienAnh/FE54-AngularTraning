import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhsachgheComponent } from './danhsachghe/danhsachghe.component';
import { DanhsachghedadatComponent } from './danhsachghedadat/danhsachghedadat.component';
import { GheComponent } from './ghe/ghe.component';
import { Baitap8Component } from './baitap8.component';




@NgModule({
  declarations: [DanhsachgheComponent, DanhsachghedadatComponent, GheComponent, Baitap8Component],
  imports: [
    CommonModule,


  ],
  exports:[Baitap8Component]
})
export class Baitap8Module { }
