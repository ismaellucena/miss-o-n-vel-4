import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Alta Books' },
    { codEditora: 2, nome: 'Pearson' },
    { codEditora: 3, nome: 'Editora Exemplo' }
  ];

  getNomeEditora(codEditora: number): string {
    return this.editoras.find(editora => editora.codEditora === codEditora)?.nome || '';
  }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }
}
