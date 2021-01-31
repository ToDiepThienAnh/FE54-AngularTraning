import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-danhsachghedadat',
  templateUrl: './danhsachghedadat.component.html',
  styleUrls: ['./danhsachghedadat.component.scss']
})
export class DanhsachghedadatComponent implements OnInit {
  @Output() onRemove= new EventEmitter();

  danhSachGheDaDat:any []=[];
  constructor() { }

  ngOnInit(): void {

  }
  chonGhe(ghe:any){
    if(ghe.dangChon)
    {
      this.danhSachGheDaDat.push(ghe);
    }
    else{
      this.danhSachGheDaDat=this.danhSachGheDaDat.filter(item=>item.soGhe!==ghe.soGhe);

    }
    console.log(this.danhSachGheDaDat);

  }
  huyGhe(soGhe:any){
    this.danhSachGheDaDat=this.danhSachGheDaDat.filter(item=>item.soGhe!==soGhe);
    this.onRemove.emit(soGhe);
  }

}
