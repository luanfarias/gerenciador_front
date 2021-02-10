import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient ) { }

  inserirProduto(codigo: string, nome: string, valor: string): Observable<any> {
    return this.httpClient.post('http://localhost:3000/produtos', {codigo, nome, valor});
  }
}
