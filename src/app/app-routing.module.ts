import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './core/guards/admin.guard';
import { BookingGuard } from './core/guards/booking.guard';
import { BookingComponent } from './main/booking/booking.component';

// import { Baitap2Component } from './baitap2/baitap2.component';
// import { Baitap8Component } from './baitap8/baitap8.component';
// import { Baitap8Module } from './baitap8/baitap8.module';
// import {DemoComponent} from './demo/demo.component'


// import {MainModule} from "./main/main.module"
// import { AdminModule } from './admin/admin.module';
const routes: Routes = [
  // {path:"",component:DemoComponent},
  // {path:"baitap2",component:Baitap2Component},
  // // {path:"baitap8",component:Baitap8Component},
  // {path:"baitap8",loadChildren:()=>Baitap8Module},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule), canActivate: [AdminGuard] },
  { path: '', loadChildren: () => import('./main/main.module').then((m) => m.MainModule) },

  //pathMatch : 'full' tuong tu exact ben react
  // khi gắn module vào router  không cần gắn vào mảng imports của modilde đó nx nha nha !!

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
