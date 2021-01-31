import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupComponent } from "src/app/main/signup/signup.component";


@Injectable({
  providedIn: 'root'
})
export class SignupGuard implements CanDeactivate<SignupComponent> {
  canDeactivate(
    component: SignupComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isDirty = component.signupForm.dirty && !component.signupForm.submitted
    if (isDirty) {
      const isConfirm = confirm('Bạn có muốn rời khỏi, tất cả dữ liệu sẽ bị mất')

      return isConfirm
    }

    // return true => cho phép rời khỏi route
    return true;
  }

}
