import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootersComponent } from './shared/components/footers/footers.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FeatherIconsComponent } from './shared/components/feather-icons/feather-icons.component';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { LayoutComponent } from './shared/layout/layout.component';



@NgModule({
  declarations: [FootersComponent, HeaderComponent, SidebarComponent, FeatherIconsComponent, BreadcrumbComponent, LayoutComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
