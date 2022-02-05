import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  buscaEndereco(cep: string): Observable<Object> {
    const urlAPI = `https://viacep.com.br/ws/${cep}/json`;
    return this.http.get(urlAPI);
  }
}
