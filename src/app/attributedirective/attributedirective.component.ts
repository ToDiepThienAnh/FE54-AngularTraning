import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributedirective',
  templateUrl: './attributedirective.component.html',
  styleUrls: ['./attributedirective.component.scss']
})
export class AttributedirectiveComponent implements OnInit {
  isActive:boolean=false;
  color:string="red";
  result:string=`<p class="bg-primary text-white">demo </p>`
  imgUrl:string="https://picsum.photos/200/300";
  constructor() { }

  ngOnInit(): void {
  }

}
