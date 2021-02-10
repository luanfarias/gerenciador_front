import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-cadastrar',
  templateUrl: './produto-cadastrar.component.html',
  styleUrls: ['./produto-cadastrar.component.css']
})
export class ProdutoCadastrarComponent implements OnInit {

  produtoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoForm = this.formBuilder.group({
      codigo: [''],
      nome: [''],
      valor: ['']
    })
  }

  cadastrarProduto() {
    this.produtoService
      .inserirProduto(
        this.produtoForm.value.codigo,
        this.produtoForm.value.nome,
        this.produtoForm.value.valor
      ).subscribe()
  }

}
