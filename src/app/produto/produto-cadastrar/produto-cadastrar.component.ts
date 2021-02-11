import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      codigo: ['', [Validators.required,Validators.pattern('(^\\d{8}$)|(^\\d{13}$)')]],
      nome: ['', Validators.required],
      valor: ['', [Validators.required, Validators.min(0.05)]]
    })
  }

  validarCodigo(): string|void {
    let codigo = this.produtoForm.get('codigo');

    if (codigo?.errors?.pattern) {
      return "Código inváido"
    }
    if (codigo?.errors?.required) {
      return "Campo obrigatório"
    }
  }

  validarNome(): string|void {
    let nome = this.produtoForm.get('nome');

    if (nome?.errors?.required) {
      return "Campo obrigatório"
    }
  }

  validarValor(): string|void {
    let valor = this.produtoForm.get('valor');

    if (valor?.errors?.required) {
      return "Campo obrigatório"
    }
    if (valor?.errors?.min) {
      return "Valor inválido"
    }
  }

  cadastrarProduto(): void {

    let valido: string = 'VALID';

    console.log(this.produtoForm.get('valor'));
    if (this.produtoForm.status == valido) {
      this.produtoService
        .inserirProduto(   
          this.produtoForm.value.codigo,
          this.produtoForm.value.nome,
          this.produtoForm.value.valor
        ).subscribe(
          () => console.log("foi")
        ) 
    }
  }

}
