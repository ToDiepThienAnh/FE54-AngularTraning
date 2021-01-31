import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookingGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const currentUser = this.auth.currentUser.value
    if (currentUser) {
      return true;
    }

    (window as any).PATH = state.url
    // Chưa đăng nhập, redirect về trang sign in
    this.router.navigateByUrl('/signin')
    return false;
  }

}
