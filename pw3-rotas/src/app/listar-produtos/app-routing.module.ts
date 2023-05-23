import { HomeComponent } from './../home/home.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroProdutoComponent } from '../cadastro-produto/cadastro-produto.component';
import { ListarProdutosComponent } from './listar-produtos.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'produtos', component:ListarProdutosComponent},
  {path:'Produtos/Cadastrar', component:CadastroProdutoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
