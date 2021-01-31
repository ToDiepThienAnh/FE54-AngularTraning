import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',//tên component sẽ nhúng vào html
  templateUrl: './app.component.html',//khai báo ten htmk của component
  styleUrls: ['./app.component.scss'] //khao cáo file scss của component

})
export class AppComponent {
  constructor(private auth: AuthService) { }

  ngOnInit() {
    const user = localStorage.getItem('user')

    if (user) {
      this.auth.currentUser.next(JSON.parse(localStorage.getItem("user") || ''))
    }
  }

}


