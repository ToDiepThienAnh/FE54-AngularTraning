import { Component, EventEmitter, OnInit, Output ,ViewChildren} from '@angular/core';
import {GheComponent} from '../ghe/ghe.component'

@Component({
  selector: 'app-danhsachghe',
  templateUrl: './danhsachghe.component.html',
  styleUrls: ['./danhsachghe.component.scss']
})
export class DanhsachgheComponent implements OnInit {
  @ViewChildren('ghe') gheComponents!:GheComponent[];
  @Output() onSelect= new EventEmitter();
  danhSachGhe:any[]=[
    {soGhe:1,tenGhe:"so1",gia:100,daDat:false},
    {soGhe:2,tenGhe:"so2",gia:100,daDat:false},
    {soGhe:3,tenGhe:"so3",gia:100,daDat:true},
    {soGhe:4,tenGhe:"so4",gia:100,daDat:false},
    {soGhe:5,tenGhe:"so5",gia:100,daDat:true},
    {soGhe:6,tenGhe:"so6",gia:100,daDat:false},
    {soGhe:7,tenGhe:"so7",gia:100,daDat:false},
    {soGhe:8,tenGhe:"so8",gia:100,daDat:false},
    {soGhe:9,tenGhe:"so9",gia:100,daDat:false},
    {soGhe:10,tenGhe:"so10",gia:100,daDat:false},
    {soGhe:11,tenGhe:"so11",gia:100,daDat:false},
    {soGhe:12,tenGhe:"so12",gia:100,daDat:false},
    {soGhe:13,tenGhe:"so13",gia:100,daDat:false},
    {soGhe:14,tenGhe:"so14",gia:100,daDat:false},
    {soGhe:15,tenGhe:"so15",gia:100,daDat:false},
    {soGhe:16,tenGhe:"so16",gia:100,daDat:false},
  ]
  chonGhe(ghe:any){
  this.onSelect.emit(ghe);
  }
  huyGhe(soGhe:number){
    this.gheComponents.forEach((gheComponent:GheComponent)=>{
      if(gheComponent.ghe.soGhe===soGhe){
        gheComponent.dangChon=false;
      }
    })

  }

  constructor() { }

  ngOnInit(): void {
  }

}
