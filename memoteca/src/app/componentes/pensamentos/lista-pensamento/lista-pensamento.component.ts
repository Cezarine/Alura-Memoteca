import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-lista-pensamento',
  templateUrl: './lista-pensamento.component.html',
  styleUrls: ['./lista-pensamento.component.css']
})

export class ListaPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  constructor(private _service: PensamentoService) { }

  ngOnInit(): void {
    this._service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

}
