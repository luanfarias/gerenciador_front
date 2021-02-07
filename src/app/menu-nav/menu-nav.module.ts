import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule}  from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MenuNavComponent } from './menu-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    MenuNavComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule
  ],
  exports: [
    MenuNavComponent
  ]
})
export class MenuNavModule { }
