import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap4',
  templateUrl: './baitap4.component.html',
  styleUrls: ['./baitap4.component.scss']
})
export class Baitap4Component implements OnInit {
 email:string="";
 fullname:string="";

  constructor() { }

  ngOnInit(): void {
  }
  handleChangeFullName(value:string){
    this.fullname=value;
  }

}
