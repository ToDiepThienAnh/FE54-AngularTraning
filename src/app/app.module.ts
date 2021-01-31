import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms'
// import {Baitap1Module} from './baitap1/baitap1.module'
import { Baitap2Module } from './baitap2/baitap2.module';
import { Baitap4Module } from './baitap4/baitap4.module';
import { Baitap8Module } from './baitap8/baitap8.module';
import { DatabindingComponent } from './databinding/databinding.component';
import { StructuraldirectiveComponent } from './structuraldirective/structuraldirective.component';
import { AttributedirectiveComponent } from './attributedirective/attributedirective.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ComponentsModule } from './components/components.module';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({

  //nơi khai báo các component được quản lý bởi module
  //app component đang được appmodule quản lý
  declarations: [
    AppComponent,
    DemoComponent,
    DatabindingComponent,
    StructuraldirectiveComponent,
    AttributedirectiveComponent
  ],
  //nơi khác báo các module sẽ dc sử dụng

  //home module:header component,footercomponent contentcomponent
  //để sử dụng  các component của home module tron import
  //những module do angular cung cấp sẵm:RouterModule,
  //formModule,HttpCLientModule,....
  //nơi khai báo các service cần sử dụng
  imports: [
    BrowserModule,
    AppRoutingModule,
    Baitap2Module,
    FormsModule,
    Baitap4Module,
    Baitap8Module,
    HttpClientModule,
    ComponentsModule,
    BrowserAnimationsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],

  //khai báo appcomponent là componenet khởi chạy đầu tiên của module
  // các module khác do mình tự tạo sẽ không có phần này
  bootstrap: [AppComponent]
})
export class AppModule { }
