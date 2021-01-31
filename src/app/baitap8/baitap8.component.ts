import { Component, OnInit,ViewChild } from '@angular/core';
import { DanhsachgheComponent } from './danhsachghe/danhsachghe.component';
import {DanhsachghedadatComponent} from './danhsachghedadat/danhsachghedadat.component'

@Component({
  selector: 'app-baitap8',
  templateUrl: './baitap8.component.html',
  styleUrls: ['./baitap8.component.scss']
})
export class Baitap8Component implements OnInit {
  @ViewChild('dsGheDaDat') dsGheDaDatComponent!:DanhsachghedadatComponent;
  @ViewChild('dsGhe') dsGheComponent!:DanhsachgheComponent;
  constructor() { }

  ngOnInit(): void {
  }
  chonGhe(ghe:any){
   this.dsGheDaDatComponent.chonGhe(ghe);
  }
  huyGhe(soGhe:any){
  this.dsGheComponent.huyGhe(soGhe);
  }


}
