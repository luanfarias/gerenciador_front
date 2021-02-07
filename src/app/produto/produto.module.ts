import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoCadastrarComponent } from './produto-cadastrar/produto-cadastrar.component';


@NgModule({
  declarations: [
    ProdutoCadastrarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProdutoCadastrarComponent
  ]
})
export class ProdutoModule { }
