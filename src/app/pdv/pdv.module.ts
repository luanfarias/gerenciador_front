import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdvComponent } from './pdv.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    PdvComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule
  ],
  exports: [
    PdvComponent
  ]
})
export class PdvModule { }
