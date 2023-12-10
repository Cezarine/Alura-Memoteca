import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  constructor(private _router: Router, private _service: PensamentoService) {}

  ngOnInit(): void {}

  criarPensamento() {
    this._service.criar(this.pensamento).subscribe(() => {
      this._router.navigate(['/listarPensamento']);
    });
  }
  cancelarPensamento() {
    this._router.navigate(['/listarPensamento']);
  }
}
