import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdvComponent } from './pdv/pdv.component';
import { ProdutoCadastrarComponent } from './produto/produto-cadastrar/produto-cadastrar.component';

const routes: Routes = [
  { path: 'produto/cadastrar', component: ProdutoCadastrarComponent },
  { path: 'pdv', component: PdvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
