import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldirective',
  templateUrl: './structuraldirective.component.html',
  styleUrls: ['./structuraldirective.component.scss']
})
export class StructuraldirectiveComponent implements OnInit {
  isActive: boolean = true;
  isLogin: boolean = true;
  color:string="primary";
  dssv:any[]=[
    {hoten:'Hieeus',lop:'FE54'},
    {hoten:'Hiasa',lop:'FE54'},
    {hoten:'Hieasfasfs',lop:'FE54'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
