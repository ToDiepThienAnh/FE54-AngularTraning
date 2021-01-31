import { Component, OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {
  message:string="hello";
  isActive:boolean=true;
  userName:string="teo";
  email:string ="";
  constructor() { }

  ngOnInit(): void {
  }
  handleChangeMessage(massageRef:HTMLInputElement){
    console.log(massageRef);
    this.message=massageRef.value;

  }
  handleChangeUsername(evt:any){
    console.log(evt.target);
    this.userName=evt.target.value;

  }
}
