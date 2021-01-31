import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, ContentComponent],
  imports: [
    CommonModule,

  ],
  exports:[HeaderComponent, FooterComponent, SidebarComponent, ContentComponent]

})
export class Baitap1Module { }
