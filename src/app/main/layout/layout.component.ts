import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from "src/app/core/auth/auth.service";


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  currentUser: any = null
  currentuserSubcription: Subscription | null = null

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    // Chỉ lấy được 1 lần duy nhất, khi current user trong AuthService thay đổi, ta sẽ không lấy đc value mới
    // this.currentUser = this.auth.currentUser.value


    // Theo dõi sự thay đổi của biến currentUser trong service, mỗi lần currentUser thay đổi sẽ nhảy vào trong callback next và nhận đc giá trị mới
    this.currentuserSubcription = this.auth.currentUser.asObservable().subscribe({
      next: (result) => {
        this.currentUser = result
      }
    })
  }
  // chạy trước khi component bị hủy
  ngOnDestroy(): void {
    // Hủy theo dõi biến currentUser khi component bị unmout
    this.currentuserSubcription?.unsubscribe()
  }
}
