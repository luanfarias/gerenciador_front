import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoCadastrarComponent } from './produto/produto-cadastrar/produto-cadastrar.component';

const routes: Routes = [
  { path: 'produto/cadastrar', component: ProdutoCadastrarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
