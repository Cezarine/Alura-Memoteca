import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  };
  constructor(private _service: PensamentoService,
              private _router: Router,
              private _route: ActivatedRoute) { }


  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    this._service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }

  excluirPensamento(){
    if(this.pensamento.id){
      this._service.excluir(this.pensamento.id).subscribe(() => {
        this._router.navigate(['/listarPensamento']);
      });
    }
  }

  cancelarPensamento(){
    this._router.navigate(['/listarPensamento']);
  }

}
